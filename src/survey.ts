import { html, render, type HTMLTemplateResult } from "lit-html";
import { triggerBtnForModalHtml } from "./userinput.ts";
import { Product } from "./types.ts";

export default class Survey extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    const cafes_unsorted = [
      "Smaakmakers",
      "ZwartWit",
      "Bakkie 040",
      "Jungle Cafe",
      "Coffee Corner",
      "Lucifer (Station)",
      "Koffie Keuten",
    ];

    const cafes: string[] = cafes_unsorted.sort((a: string, b: string) => {
      return a.localeCompare(b);
    });

    return html` <div
      class="border border-primary rounded m-3 table-responsive"
    >
      <p class="h3 ">Rate cafes</p>
      <table class="table">
        <thead class="thread-dark">
          <tr>
            <th scope="col">Cafe</th>
            <th scope="col">Coffee</th>
            <th scope="col">Tosti</th>
            <th scope="col">Pastry</th>
          </tr>
        </thead>
        <tbody>
          ${cafes.map((cafe) => {
            return html`
              <tr>
                <td>${cafe}</td>
                <td>${triggerBtnForModalHtml(cafe, Product.Coffee)}</td>
                <td>${triggerBtnForModalHtml(cafe, Product.Tosti)}</td>
                <td>${triggerBtnForModalHtml(cafe, Product.Pastry)}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
