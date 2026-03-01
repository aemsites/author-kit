import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

const LOAD_EVENT = 'at-content-rendering-succeeded';
const NO_OFFERS_EVENT = 'at-content-rendering-no-offers';
const FAILED_EVENT = 'at-request-failed';
const TIMEOUT = 5000;

function convertTargetSelector(selector) {
  // Converts :eq(0) to :nth-of-type(1), :eq(1) to :nth-of-type(2), etc.
  return selector.replace(/:eq\((\d+)\)/g, (match, p1) => {
    const index = parseInt(p1, 10) + 1;
    return `:nth-of-type(${index})`;
  });
}

const targetFinished = async () => {
  // Truly disable with Target's own convention
  const params = new URLSearchParams(window.location.search);
  if (params.has('mboxDisable')) return null;

  // Asyncronously load the script
  await loadScript(`${codeBase}/deps/at/at.js`);
  const offers = await window.adobe.target.getOffers({
    request: { execute: { pageLoad: {} } },
  });

  offers.execute.pageLoad.options.forEach((opt) => {
    const { cssSelector, content } = opt.content[0];

    const selector = convertTargetSelector(cssSelector);
    const el = document.querySelector(selector);

    el.outerHTML = content;
  });

  // Only resolve when one of the following happens
  // return new Promise((resolve) => {
  //   // If there are no offers
  //   // document.addEventListener(NO_OFFERS_EVENT, resolve);

  //   document.addEventListener('at-request-succeeded', async (e) => {




  //     resolve();
  //   }, { once: true });

  //   // If the DOM has been updated
  //   // document.addEventListener(LOAD_EVENT, () => {
  //   //   const markers = document.querySelectorAll('.at-element-marker');
  //   //   for (const marker of markers) {
  //   //     marker.replaceWith(...marker.childNodes);
  //   //   }
  //   //   resolve();
  //   // });

  //   // // If the update failed
  //   // document.addEventListener(FAILED_EVENT, resolve);

  //   // // If it takes longer than 5 seconds
  //   // setTimeout(() => { resolve(); }, TIMEOUT);
  // });
};

export default targetFinished;
