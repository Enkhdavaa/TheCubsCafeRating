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
    return html`<div class="container-fluid">
      <div class="row">
        <div class="col-2 col-sm"><p class="h6">Cafe name</p></div>
        <div class="col-2 col-sm"><p class="h6">Location</p></div>
        <div class="col-2 col-sm"><p class="h6">Coffee rating</p></div>
        <div class="col-2 col-sm"><p class="h6">Tosti rating</p></div>
        <div class="col-2 col-sm"><p class="h6">Vibe rating</p></div>
      </div>
      ${rows.map((row) => {
        return html`
          <div class="row mb-3">
            <div class="col-2 col-sm"><span>${row.CafeName}</span></div>
            <div class="col-2 col-sm"><span>${row.Location}</span></div>
            <div class="col-2 col-sm">
              <span>${row.CoffeeRating}</span>
              ${ratingUserInput(row.CafeName, "Coffee")}
            </div>
            <div class="col-2 col-sm">
              <span>${row.TostiRating}</span>
              ${ratingUserInput(row.CafeName, "Tosti")}
            </div>
            <div class="col-2 col-sm">
              <span>${row.VibeRating}</span>
              ${ratingUserInput(row.CafeName, "Vibe")}
            </div>
          </div>
        `;
      })}
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
