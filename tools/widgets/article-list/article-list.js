import DA_SDK from 'https://da.live/nx/utils/sdk.js';
import { LitElement, html, nothing } from 'da-lit';

// Super Lite components
import 'https://da.live/nx/public/sl/components.js';

// Application styles
import loadStyle from '../../../scripts/utils/styles.js';

const styles = await loadStyle(import.meta.url);

class AKArticleList extends LitElement {
  static properties = {
    path: { attribute: false },
    token: { attribute: false },
    _showPagination: { state: true },
  };

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  getFieldDetails(name) {
    const field = this.shadowRoot.querySelector(`[name="${name}"`);
    if (!field) return null;

    const { label, value } = field;

    if (!value) return null;

    // Author friendly text
    const text = ` | ${label.toLowerCase()}: ${value.toLowerCase()}`;

    return { text, key: name, value: value?.toLowerCase().replaceAll(' ', '-') };
  }

  handleInsert() {
    let text = '<strong>Article List</strong>';
    const search = new URLSearchParams();

    const params = [
      this.getFieldDetails('sort'),
      this.getFieldDetails('filter'),
      this.getFieldDetails('limit'),
      this.getFieldDetails('pagination'),
    ];

    for (const param of params) {
      if (param) {
        text += param.text;
        search.append(param.key, param.value);
      }
    }

    this.actions.sendHTML(`<a href="${window.location.origin}/tools/widgets/article-list.html?${search}">${text}</a>`);
  }

  handleLimit({ target }) {
    this._showPagination = target.value > 0;
  }

  renderPagination() {
    if (!this._showPagination) return nothing;
    return html`
      <sl-select label="Paginate" name="pagination">
        <option value="">No</option>
        <option>Yes</option>
      </sl-select>
    `;
  }

  render() {
    return html`
      <p class="title">Create new</p>
      <form>
        <sl-select label="Sort by" name="sort">
          <option>Publish date</option>
        </sl-select>
        <sl-select label="Filter by" name="filter">
          <option value="">None</option>
          <option>Featured</option>
          <option>Author</option>
          <option>Tag</option>
        </sl-select>
        <sl-input label="Limit" type="number" name="limit" @input=${this.handleLimit}></sl-input>
        ${this.renderPagination()}
        <div class="actions">
          <sl-button @click=${this.handleInsert}>Insert</sl-button>
        </div>
      </form>
    `;
  }
}

customElements.define('ak-article-list', AKArticleList);

(async function init() {
  const { context, token, actions } = await DA_SDK;
  const { org, repo, path } = context;

  const cmp = document.createElement('ak-article-list');
  cmp.path = `/${org}/${repo}${path}`;
  cmp.token = token;
  cmp.actions = actions;

  document.body.append(cmp);
}());
