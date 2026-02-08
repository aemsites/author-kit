export default async function fetchDaSc({ url, env, request }) {
  const href = `https://da-sc.adobeaem.workers.dev/live/${env.AEM_ORG}/${env.AEM_SITE}${url.pathname}`;

  const listReq = new Request(href, request);
  const resp = await fetch(listReq);

  // Handle 304 Not Modified responses
  if (resp.status === 304) {
    return new Response(null, { status: 304, headers: resp.headers });
  }

  const text = await resp.text();

  const headers = new Headers(resp.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');

  return new Response(text, { status: resp.status, headers });
}
