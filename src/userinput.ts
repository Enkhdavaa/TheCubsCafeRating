import { html, render, type HTMLTemplateResult } from "lit-html";
import { RatingInput } from "./components/labelledInput.ts";

export default class UserInput extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html`
      <div>
        <label for="User Name">User name</label>
        <div>${RatingInput()}</div>
        <label for="Rating">User name</label>
        <div>${RatingInput()}</div>
      </div>
    `;
  }
}

customElements.define("rating-userinput", UserInput);
