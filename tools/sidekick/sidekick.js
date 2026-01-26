import toggleScheduler from '../scheduler/scheduler.js';
import initQuickEdit from '../quick-edit/quick-edit.js';

export default async function init(sk) {
  sk.classList.add('is-ready');
  sk.addEventListener('custom:scheduler', toggleScheduler);
  sk.addEventListener('custom:quick-edit', initQuickEdit);
}
