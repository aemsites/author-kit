import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

const LOAD_EVENT = 'at-content-rendering-succeeded';
const NO_CON_EVENT = 'at-content-rendering-no-content';

const targetFinished = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('mboxDisable')) return null;

  loadScript(`${codeBase}/deps/at/at.js`);

  return new Promise((resolve) => {
    document.addEventListener(NO_CON_EVENT, () => {
      resolve();
    });

    document.addEventListener(LOAD_EVENT, () => {
      const markers = document.querySelectorAll('.at-element-marker');
      for (const marker of markers) {
        marker.replaceWith(...marker.childNodes);
      }
      resolve();
    });
  });
};

export default targetFinished;
