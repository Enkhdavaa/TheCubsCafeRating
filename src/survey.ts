import { html, render, type HTMLTemplateResult } from "lit-html";
import { triggerBtnForModalHtml } from "./userinput.ts";
import { Product } from "./types.ts";
import { cafes } from "./cafes.ts";

export default class Survey extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html` <div class="border border-primary rounded m-3">
      <p class="h3">Rate cafes</p>
      <table class="table main-page-table">
        <thead class="thread-dark sticky">
          <tr class="">
            <th style="width: 33vw;" scope="col">Cafe</th>
            <th style="text-align: center;" scope="col">Coffee</th>
            <th style="text-align: center;" scope="col">Tosti</th>
            <th style="text-align: center;" scope="col">Pastry</th>
          </tr>
        </thead>
        <tbody>
          ${cafes.map((cafe) => {
            return html`
              <tr>
                <td>${cafe}</td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe, Product.Coffee)}
                </td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe, Product.Tosti)}
                </td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe, Product.Pastry)}
                </td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
