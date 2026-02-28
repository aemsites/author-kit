import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

const LOAD_EVENT = 'at-content-rendering-succeeded';
const NO_OFFERS_EVENT = 'at-content-rendering-no-offers';
const FAILED_EVENT = 'at-request-failed';
const TIMEOUT = 5000;

const targetFinished = () => {
  // Truly disable with Target's own convention
  const params = new URLSearchParams(window.location.search);
  if (params.has('mboxDisable')) return null;

  // Asyncronously load the script
  loadScript(`${codeBase}/deps/at/at.js`);

  // Only resolve when one of the following happens
  return new Promise((resolve) => {
    // If there are no offers
    document.addEventListener(NO_OFFERS_EVENT, resolve);

    // If the DOM has been updated
    document.addEventListener(LOAD_EVENT, () => {
      const markers = document.querySelectorAll('.at-element-marker');
      for (const marker of markers) {
        marker.replaceWith(...marker.childNodes);
      }
      resolve();
    });

    // If the update failed
    document.addEventListener(FAILED_EVENT, resolve);

    // If it takes longer than 5 seconds
    setTimeout(() => { resolve(); }, TIMEOUT);
  });
};

export default targetFinished;
