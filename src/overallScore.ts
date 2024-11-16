import { html, render, type HTMLTemplateResult } from "lit-html";
import { apiGet5TopCafes } from "./api/getTops.ts";
import { TopCafe } from "./api/interface.ts";

export default class OverallScore extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    apiGet5TopCafes()
      .then((res) => {
        render(this.#template(res ?? []), this);
      })
      .catch((err) => {
        console.error(err);
        render(this.#template([]), this);
      });
  }

  #template(topCafes: TopCafe[]): HTMLTemplateResult {
    return html`<div class="border border-primary rounded m-3 table-responsive">
      <p class="h3 ">Score</p>
      <table class="table">
        <thead class="thread-dark">
          <tr>
            <th scope="col">Cafe name</th>
            <th scope="col">Coffee rating</th>
            <th scope="col">Tosti rating</th>
            <th scope="col">Vibe rating</th>
            <th scope="col">Overall</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            ${topCafes.map((cafe) => {
              return html`
                <td>${cafe.cafe}</td>
                <td>${cafe.coffeeRating}</td>
                <td>${cafe.tostiRating}</td>
                <td>${cafe.vibeRating}</td>
                <td>${cafe.overallScore}</td>
              `;
            })}
          </tr>
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("overall-score", OverallScore);
