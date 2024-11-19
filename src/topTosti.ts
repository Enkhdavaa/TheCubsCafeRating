import { html, render, type HTMLTemplateResult } from "lit-html";
import { AvarageScore } from "./db/interface.ts";
import { apiGetTopTostis } from "./api/getTopTostis.ts";

export default class TopTosti extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetTopTostis()
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(topTostis: AvarageScore[]): HTMLTemplateResult {
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Top tosti</p>
      <table class="table">
        <thead class="thread-dark">
          <tr>
            <th scope="col">Cafe</th>
            <th scope="col">Product</th>
            <th scope="col">Score</th>
            <th scope="col">Review Count</th>
          </tr>
        </thead>
        <tbody>
          ${topTostis.map((cafe) => {
            return html`
              <tr>
                <td>${cafe.cafe}</td>
                <td>${cafe.product}</td>
                <td>${cafe.score}</td>
                <td>${cafe.count}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("top-tosti", TopTosti);
