import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

await (async function target() {
  window.targetGlobalSettings = {
    bodyHidingEnabled: false,
    autoCreate: false
  };

  await loadScript(`${codeBase}/deps/at/at.js`);

  const response = await adobe.target.getOffers({
    request: {
      execute: {
        mboxes: [{ index: 0, name: 'target-global-mbox' }]
      }
    }
  });

  console.log(response);

  document.addEventListener('at-request-succeeded', (e) => {
    console.log(e);
    console.log('Target decision complete');
  });

  document.addEventListener('at-content-rendering-succeeded', function (e) {
    console.log('Target finished rendering: ', e.detail);
  });
}());


