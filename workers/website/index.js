/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { fetchSchedule, fetchFromAem } from './handlers/aem.js';
import fetchDaSc from './handlers/dasc.js';

const ROUTES = [
  // Handle schedule manifests
  {
    match: (path) => path.includes('/schedules/') && path.endsWith('json'),
    handler: fetchSchedule,
  },
  // Handle structured content
  {
    match: (path) => path.includes('/dasc/') && path.endsWith('json'),
    handler: fetchDaSc,
  },
  // Handle drafts
  {
    match: (path) => path.startsWith('/drafts'),
    handler: () => new Response('Not found - drafts are denied on production.', { status: 404 }),
  },
  // Default AEM handler should be last
  {
    match: () => true,
    handler: fetchFromAem,
    cache: true,
  },
];

const getExtension = (path) => {
  const basename = path.split('/').pop();
  const pos = basename.lastIndexOf('.');
  return (basename === '' || pos < 1) ? '' : basename.slice(pos + 1);
};

const isMediaRequest = (url) => /\/media_[0-9a-f]{40,}[/a-zA-Z0-9_-]*\.[0-9a-z]+$/.test(url.pathname);
const isRUMRequest = (url) => /\/\.(rum|optel)\/.*/.test(url.pathname);

const getPortRedirect = (request, url) => {
  if (url.port && url.hostname !== 'localhost') {
    const redirectTo = new URL(request.url);
    redirectTo.port = '';
    return new Response(`Moved permanently to ${redirectTo.href}`, {
      status: 301,
      headers: { location: redirectTo.href },
    });
  }
  return null;
};

const getRUMRequest = (request, url) => {
  if (isRUMRequest(url)) {
    if (!['GET', 'POST', 'OPTIONS'].includes(request.method)) {
      return new Response('Method Not Allowed', { status: 405 });
    }
  }
  return null;
};

const formatSearchParams = (url) => {
  const { search, searchParams } = url;

  if (isMediaRequest(url)) {
    for (const [key] of searchParams.entries()) {
      if (!['format', 'height', 'optimize', 'width'].includes(key)) searchParams.delete(key);
    }
  } else if (getExtension(url.pathname) === 'json') {
    for (const [key] of searchParams.entries()) {
      if (!['limit', 'offset', 'sheet'].includes(key)) searchParams.delete(key);
    }
  } else {
    url.search = '';
  }
  searchParams.sort();

  // Return original search params
  return search;
};

const formatRequest = (env, request, url) => {
  const aemUrl = new URL(url.href);
  aemUrl.hostname = `main--${env.AEM_SITE}--${env.AEM_ORG}.aem.live`;
  aemUrl.port = '';
  aemUrl.protocol = 'https:';
  const req = new Request(aemUrl, request);
  req.headers.set('x-forwarded-host', req.headers.get('host'));
  req.headers.set('x-byo-cdn-type', 'cloudflare');
  if (env.PUSH_INVALIDATION !== 'disabled') {
    req.headers.set('x-push-invalidation', 'enabled');
  }
  if (env.ORIGIN_AUTHENTICATION) {
    req.headers.set('authorization', `token ${env.ORIGIN_AUTHENTICATION}`);
  }
  return req;
};

export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    const portResp = getPortRedirect(req, url);
    if (portResp) return portResp;

    const rumResp = getRUMRequest(req, url);
    if (rumResp) return rumResp;

    const request = formatRequest(env, req, url);

    const savedSearch = formatSearchParams(url);

    const { handler, cache } = ROUTES.find((route) => route.match(url.pathname));

    return handler({ url, env, request, cache, savedSearch });
  },
};
