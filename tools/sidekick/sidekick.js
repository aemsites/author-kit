import toggleScheduler from '../scheduler/scheduler.js';
import initQuickEdit from '../quick-edit/quick-edit.js';

export default async function init(sk) {
  // Handle button clicks
  sk.addEventListener('custom:scheduler', toggleScheduler);
  sk.addEventListener('custom:quick-edit', initQuickEdit);

  // Show after all decoration is finished
  sk.classList.add('is-ready');
}
