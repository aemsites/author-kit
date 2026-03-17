import { LitElement, html, nothing } from '../../deps/lit/dist/index.js';
import loadStyle from '../../scripts/utils/styles.js';

const styles = await loadStyle(import.meta.url);

const EL_NAME = 'ak-lamont';

class AKLamont extends LitElement {
  static properties = {
    details: { attribute: false },
  };

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.adoptedStyleSheets = [styles];
    console.log(this.details);
  }

  renderImage() {
    if (!this.details.image.content) return nothing;
    return html`
      <p>The following is an image that came directly from Edge Delivery Services.</p>
      <p>The server-side DOM is re-used directly inside Lit.</p>
      ${this.details.image.content}
    `;
  }

  render() {
    return html`
      <h1>Hello, ${this.details.firstName.text}</h1>
      ${this.renderImage()}
    `;
  }
}

customElements.define(EL_NAME, AKLamont);

// Gets key / values from a KV-style block,
// will return the value div (for images / styled text), or the raw text
const getBlockDetails = (el) => [...el.childNodes].reduce((rdx, row) => {
  if (row.children) {
    const key = row.children[0].textContent.trim();
    const content = row.children[1];
    const text = content.textContent.trim();
    if (key && content) rdx[key] = { content, text };
  }
  return rdx;
}, {});

export default function init(el) {
  const cmp = document.createElement(EL_NAME);
  cmp.details = getBlockDetails(el);
  el.replaceChildren();
  el.append(cmp);
}
