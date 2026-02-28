export default async function target(request, env) {
  const url = new URL(request.url);
  url.hostname = env.TARGET_HOSTNAME;

  return fetch(url, request);
}
