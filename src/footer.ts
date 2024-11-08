import { html, render, type HTMLTemplateResult } from "lit-html";

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html`<footer class="bg-dark text-white-50 text-center py-3">
      <h3>Bye</h3>
    </footer>`;
  }
}

customElements.define("rating-footer", Footer);
