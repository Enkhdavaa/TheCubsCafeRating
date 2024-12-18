import { html, render, type HTMLTemplateResult } from "lit-html";
import { apiGetLastReviews } from "./api/getReviews.ts";
import { Review } from "./db/interface.ts";

export default class VoteHostory extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetLastReviews()
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(userRates: Review[]): HTMLTemplateResult {
    return html`<div>
      <span class="h-c sticky">HISTORY</span>
      <table class="cafe-table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Cafe</th>
            <th scope="col">Product</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          ${userRates.map((rate) => {
            return html`
              <tr>
                <td style="max-width: 13vh; overflow-wrap: break-word;">
                  ${rate.username}
                </td>
                <td>${rate.cafe}</td>
                <td>${rate.product}</td>
                <td>${rate.score}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("vote-history", VoteHostory);
