import { html, render, type HTMLTemplateResult } from "lit-html";
import { AvarageScore } from "./db/interface.ts";
import { apiGetTopProducts } from "./api/getTopProducts.ts";
import { Product } from "./types.ts";

export default class TopPastry extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetTopProducts(Product.Pastry)
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(products: AvarageScore[]): HTMLTemplateResult {
    return html`<div class="pb-3">
      <span class="sticky h-c">TOP PASTRY</span>
      <table class="cafe-table">
        <thead class="sticky-head">
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Cafe</th>
            <th scope="col">Score</th>
            <th scope="col">Based</th>
          </tr>
        </thead>
        <tbody>
          ${products.map((cafe, index) => {
            return html`
              <tr>
                <td>${index + 1}</td>
                <td>${cafe.cafe}</td>
                <td>${cafe.score}</td>
                <td>${cafe.count} revs</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("top-pastry", TopPastry);
