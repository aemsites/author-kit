import toggleScheduler from '../scheduler/scheduler.js';
import initQuickEdit from '../quick-edit/quick-edit.js';

const getSk = () => document.querySelector('aem-sidekick');

async function ready(sk) {
  sk.classList.add('is-ready');
  sk.addEventListener('custom:scheduler', toggleScheduler);
  sk.addEventListener('custom:quick-edit', initQuickEdit);
}

(async function loadSidekick() {
  const sk = getSk() || await new Promise((resolve) => {
    document.addEventListener('sidekick-ready', () => resolve(getSk()));
  });
  ready(sk);
}());
