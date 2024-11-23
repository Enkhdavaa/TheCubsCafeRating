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
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Top pastry</p>
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
          ${products.map((cafe) => {
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

customElements.define("top-pastry", TopPastry);
