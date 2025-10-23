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

const getExtension = (path) => {
  const basename = path.split('/').pop();
  const pos = basename.lastIndexOf('.');
  return (basename === '' || pos < 1) ? '' : basename.slice(pos + 1);
};

const isMediaRequest = (url) => /\/media_[0-9a-f]{40,}[/a-zA-Z0-9_-]*\.[0-9a-z]+$/.test(url.pathname);
const isRUMRequest = (url) => /\/\.(rum|optel)\/.*/.test(url.pathname);

const getDraft = (url) => {
  if (!url.pathname.startsWith('/drafts/')) return null;
  return new Response('Not Found', { status: 404 });
};

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

const getRedirect = (resp, savedSearch) => {
  if (!(resp.status === 301 && savedSearch)) return;
  const location = resp.headers.get('location');
  if (location && !location.match(/\?.*$/)) {
    resp.headers.set('location', `${location}${savedSearch}`);
  }
};

const getRUMRequest = (request, url) => {
  if (!isRUMRequest(url)) return null;
  if (['GET', 'POST', 'OPTIONS'].includes(request.method)) return null;
  return new Response('Method Not Allowed', { status: 405 });
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
  url.hostname = env.AEM_HOSTNAME;
  url.port = '';
  url.protocol = 'https:';
  const req = new Request(url, request);
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

const getSchedule = async (pathname, response) => {
  if (!(pathname.includes('/schedules/') && pathname.endsWith('json'))) return null;

  const schedule2Response = (json) => new Response(JSON.stringify(json), response);

  const json = await response.json();
  if (!json.data?.[0]?.fragment) return schedule2Response(json);

  const data = [];
  for (const [idx, schedule] of json.data.entries()) {
    const { start, end } = schedule;

    // Presumably the default fragment
    if (!start && !end) {
      data.push(json.data[idx]);
    } else {
      const now = Date.now();
      const startDate = new Date(start);
      const endDate = new Date(end);
      if (startDate < now && endDate > now) data.push(json.data[idx]);
    }
  }

  return schedule2Response({ ...json, data });
};

const getCachability = ({ pathname }) => !(pathname.includes('/schedules/') && pathname.endsWith('json'));

const fetchFromOrigin = async (req, cacheEverything, savedSearch) => {
  let resp = await fetch(req, { method: req.method, cf: { cacheEverything } });
  resp = new Response(resp.body, resp);

  // Handle redirects
  const redirectResp = getRedirect(resp, savedSearch);
  if (redirectResp) return redirectResp;

  // 304 Not Modified - remove CSP header
  if (resp.status === 304) resp.headers.delete('Content-Security-Policy');

  resp.headers.delete('age');
  resp.headers.delete('x-robots-tag');

  return resp;
};

export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    const draftResp = getDraft(url);
    if (draftResp) return draftResp;

    const portResp = getPortRedirect(req, url);
    if (portResp) return portResp;

    const rumResp = getRUMRequest(req, url);
    if (rumResp) return rumResp;

    const request = formatRequest(env, req, url);

    const cacheable = getCachability(url);

    const savedSearch = formatSearchParams(url);

    const originResp = await fetchFromOrigin(request, cacheable, savedSearch);

    const scheduleResp = await getSchedule(url.pathname, originResp);
    if (scheduleResp) return scheduleResp;

    return originResp;
  },
};
