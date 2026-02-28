import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

await (async function target() {
  await loadScript(`${codeBase}/deps/at/at.js`);

  document.addEventListener('at-request-succeeded', (e) => {
    console.log(e);
    console.log('Target decision complete');
  });

  document.addEventListener('at-library-loaded', function () {
    document.addEventListener('at-content-rendering-succeeded', function (e) {
      console.log('Target finished rendering: ', e.detail);
    });
  });
}());


