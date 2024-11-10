import { html, render, type HTMLTemplateResult } from "lit-html";

export default class OverallScore extends HTMLElement {
  constructor() {
    super();
    this.#update();
  }

  #update() {
    render(this.#template(), this);
  }

  #template(): HTMLTemplateResult {
    return html`<div class="border border-primary rounded m-3">
      <p class="h3 ">Score</p>
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
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>`;
  }
}

customElements.define("overall-score", OverallScore);
