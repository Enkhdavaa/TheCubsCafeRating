import { html, render, type HTMLTemplateResult } from "lit-html";
import { apiGetLast30Rates } from "./api/getRates.ts";
import { UserRate } from "./api/interface.ts";

export default class VoteHostory extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetLast30Rates()
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(userRates: UserRate[]): HTMLTemplateResult {
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Vote history</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Cafe</th>
            <th scope="col">Product</th>
            <th scope="col">Rating (1-10)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            ${userRates.map((rate) => {
              return html`<td>${rate.user}</td>
                <td>${rate.cafe}</td>
                <td>${rate.product}</td>
                <td>${rate.score}</td>`;
            })}
          </tr>
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("vote-history", VoteHostory);
