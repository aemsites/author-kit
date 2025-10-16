export default function init(el) {
  const list = el.querySelector('ul');
  const nav = document.createElement('nav');
  nav.append(list);

  el.replaceChildren();
  el.append(nav);
}
