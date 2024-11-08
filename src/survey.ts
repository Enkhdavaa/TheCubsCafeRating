import { html, render, type HTMLTemplateResult } from "lit-html";
import { ratingUserInput } from "./userinput.ts";

export default class Survey extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html`<div class="container-fluid">
      <div class="row">
        <div class="col-sm">Cafe name</div>
        <div class="col-sm">Location</div>
        <div class="col-sm">Coffee</div>
        <div class="col-sm">Tosti</div>
        <div class="col-sm">Vibe</div>
      </div>
      <div class="row">
        <div class="col-sm">${ratingUserInput()}</div>
        <div class="col-sm">${ratingUserInput()}</div>
        <div class="col-sm">${ratingUserInput()}</div>
        <div class="col-sm">${ratingUserInput()}</div>
        <div class="col-sm">${ratingUserInput()}</div>
      </div>
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
