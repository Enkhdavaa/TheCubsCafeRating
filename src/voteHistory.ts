import { html, render, type HTMLTemplateResult } from "lit-html";
import { GetRates } from "./api/getRates.ts";

export default class VoteHostory extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    const history = GetRates("", "", "", 1);
    console.log(history);
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Vote history</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Cafe</th>
            <th scope="col">Product</th>
            <th scope="col">Rating (1-10)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("vote-history", VoteHostory);
