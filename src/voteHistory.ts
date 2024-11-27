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
    return html`<div class="border border-primary rounded m-3">
      <p class="h3 ">Rate history</p>
      <table class="table">
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
                <td style="max-width: 9vh; overflow-wrap: break-word;">
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
