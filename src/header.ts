import { html, render, type HTMLTemplateResult } from "lit-html";

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html`<div class="mb-10">
      <h3>Welcome to Cubs cafe rating</h3>
    </div>`;
  }
}

customElements.define("rating-header", Header);
