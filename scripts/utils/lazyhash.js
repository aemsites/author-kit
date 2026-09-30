import { ifLocalStorage } from '../ak.js';

(async function lazyHash() {
  const id = ifLocalStorage.getItem('lazyhash');
  if (!id) return;
  ifLocalStorage.removeItem('lazyhash');
  window.document.getElementById(id)?.scrollIntoView();
}());
