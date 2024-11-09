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
        <div class="col-sm"><p class="h5">Cafe name</p></div>
        <div class="col-sm"><p class="h5">Location</p></div>
        <div class="col-sm"><p class="h5">Coffee rating</p></div>
        <div class="col-sm"><p class="h5">Tosti rating</p></div>
        <div class="col-sm"><p class="h5">Vibe rating</p></div>
        <div class="col-sm"><p class="h5">Action</p></div>
      </div>
      ${rows.map((row) => {
        return html`
          <div class="row mb-3">
            <div class="col-sm">${row.CafeName}</div>
            <div class="col-sm">${row.Location}</div>
            <div class="col-sm">${row.CoffeeRating}</div>
            <div class="col-sm">${row.TostiRating}</div>
            <div class="col-sm">${row.VibeRating}</div>
            <div class="col-sm">${ratingUserInput()}</div>
          </div>
        `;
      })}
    </div>`;
  }
}

customElements.define("cafe-survey", Survey);
