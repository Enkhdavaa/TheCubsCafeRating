import { html, render, type HTMLTemplateResult } from "lit-html";
import { AvarageScore } from "./db/interface.ts";
import { apiGetTopProducts } from "./api/getTopProducts.ts";
import { Product } from "./types.ts";

export default class TopCoffee extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetTopProducts(Product.Coffee)
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(topCoffees: AvarageScore[]): HTMLTemplateResult {
    return html`<div class="pb-3">
      <span class="sticky h-c">TOP COFFEE</span>
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
          ${topCoffees.map((cafe, index) => {
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

customElements.define("top-coffee", TopCoffee);
