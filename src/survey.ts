import { html, render, type HTMLTemplateResult } from "lit-html";
import { ratingUserInput } from "./userinput.ts";

export default class Survey extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    const rows = [
      {
        CafeName: "Smaakmakers",
        Location: "Eindhoven",
        CoffeeRating: 9,
        TostiRating: 9,
        VibeRating: 9,
      },
      {
        CafeName: "ZwartWit",
        Location: "VictoriaPark",
        CoffeeRating: 9,
        TostiRating: 9,
        VibeRating: 9,
      },
    ];
    return html` <div class="border border-primary rounded m-3">
      <p class="h3 ">Rate cafes</p>
      <table class="table">
        <thead class="thread-dark">
          <tr>
            <th scope="col">Cafe name</th>
            <th scope="col">Location</th>
            <th scope="col">Coffee rating</th>
            <th scope="col">Tosti rating</th>
            <th scope="col">Vibe rating</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => {
            return html`
              <tr>
                <td>${row.CafeName}</td>
                <td>${row.Location}</td>
                <td>${ratingUserInput(row.CafeName, "Coffee")}</td>
                <td>${ratingUserInput(row.CafeName, "Tosti")}</td>
                <td>${ratingUserInput(row.CafeName, "Vibe")}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
