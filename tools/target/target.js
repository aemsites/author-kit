import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

const LOAD_EVENT = 'at-content-rendering-succeeded';
const NO_OFFERS_EVENT = 'at-content-rendering-no-offers';
const FAILED_EVENT = 'at-request-failed';

const targetFinished = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('mboxDisable')) return null;

  loadScript(`${codeBase}/deps/at/at.js`);

  return new Promise((resolve) => {
    document.addEventListener(NO_OFFERS_EVENT, resolve);

    document.addEventListener(LOAD_EVENT, () => {
      const markers = document.querySelectorAll('.at-element-marker');
      for (const marker of markers) {
        marker.replaceWith(...marker.childNodes);
      }
      resolve();
    });

    document.addEventListener(FAILED_EVENT, resolve);

    setTimeout(() => { resolve(); }, 3000);
  });
};

export default targetFinished;
