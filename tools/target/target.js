import { getConfig } from '../../scripts/ak.js';
import loadScript from '../../scripts/utils/script.js';

const { codeBase } = getConfig();

const LOAD_EVENT = 'at-content-rendering-succeeded';

const targetFinished = () => {
  loadScript(`${codeBase}/deps/at/at.js`);

  return new Promise((resolve) => {
    document.addEventListener('at-request-succeeded', (e) => {
      const { response } = e.detail;
      const hasActivities = response?.execute?.pageLoad?.options?.length > 0;
      if (!hasActivities) resolve();
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
