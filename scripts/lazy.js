import ENV from './utils/env.js';

async function loadSidekick() {
  const getSk = () => document.querySelector('aem-sidekick');

  const sk = getSk() || await new Promise((resolve) => {
    document.addEventListener('sidekick-ready', () => resolve(getSk()));
  });
  if (sk) import('../tools/sidekick/sidekick.js').then((mod) => mod.default);
}

async function loadQuickEdit() {
  const mod = await import('../tools/quick-edit/quick-edit.js');
  mod.default();
}

(function loadLazy() {
  import('./utils/lazyhash.js');
  import('./utils/favicon.js');
  import('./utils/footer.js').then(({ default: footer }) => footer());

  // Pre-prod tools
  if (ENV !== 'prod') {
    import('../tools/scheduler/scheduler.js');
    loadSidekick();

    const url = new URL(window.location.href);
    if (url.searchParams.has('quickedit')) {
      url.searchParams.delete('quickedit');
      window.history.replaceState(null, '', url.href);
      loadQuickEdit();
    }
  }
}());
