import { html, render, type HTMLTemplateResult } from "lit-html";
import { apiGetTopCoffees } from "./api/getTopCoffees.ts";
import { TopCafe } from "./api/interface.ts";

export default class BestCoffee extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGetTopCoffees()
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(topCoffees: TopCafe[]): HTMLTemplateResult {
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Top coffee</p>
      <table class="table">
        <thead class="thread-dark">
          <tr>
            <th scope="col">Cafe name</th>
            <th scope="col">Coffee rating</th>
            <th scope="col">Tosti rating</th>
            <th scope="col">Vibe rating</th>
          </tr>
        </thead>
        <tbody>
          ${topCoffees.map((cafe) => {
            return html`
              <tr>
                <td>${cafe.cafe}</td>
                <td>${cafe.coffeeRating}</td>
                <td>${cafe.tostiRating}</td>
                <td>${cafe.vibeRating}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("top-coffee", BestCoffee);
