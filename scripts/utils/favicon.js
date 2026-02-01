import { getConfig, getMetadata } from '../ak.js';

(async function loadFavicon() {
  const { codeBase } = getConfig();
  const name = getMetadata('favicon') || 'favicon';
  const favBase = `${codeBase}/img/favicons/${name}`;

  const tags = `<link rel="icon" href="${favBase}.svg" type="image/svg+xml">
                <link rel="apple-touch-icon" href="${favBase}-180.png">
                <link rel="manifest" href="${favBase}.webmanifest">`;

  document.head.insertAdjacentHTML('beforeend', tags);
  const favicon = document.head.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = `${favBase}.ico`;
}());
