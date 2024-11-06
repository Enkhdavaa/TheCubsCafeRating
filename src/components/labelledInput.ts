import { html, type HTMLTemplateResult } from "lit-html";

export function RatingInput(): HTMLTemplateResult {
  return html`<div>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
  </div>`;
}
