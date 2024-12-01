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
    return html` <div class="pb-3">
      <table class="cafe-table">
        <thead class="sticky">
          <tr>
            <th style="width: 33vw;" scope="col">
              <span>Cafe</span>
              <span style="font-size: xx-small; font-style: italic;">
                (clickable)</span
              >
            </th>
            <th style="text-align: center;" scope="col">Coffee</th>
            <th style="text-align: center;" scope="col">Tosti</th>
            <th style="text-align: center;" scope="col">Pastry</th>
          </tr>
        </thead>
        <tbody>
          ${cafes.map((cafe) => {
            return html`
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="${cafe.link}"
                    style="text-decoration: none; color: #0d0d0d;"
                  >
                    ${cafe.name}
                  </a>
                </td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe.name, Product.Coffee)}
                </td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe.name, Product.Tosti)}
                </td>
                <td style="text-align: center;">
                  ${triggerBtnForModalHtml(cafe.name, Product.Pastry)}
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
