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
    return html`<div>
      <span>Welcome to Cubs cafe rating</span>
    </div>`;
  }
}

customElements.define("rating-header", Header);
