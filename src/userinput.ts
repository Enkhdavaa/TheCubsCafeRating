import { html, type HTMLTemplateResult } from "lit-html";

export function ratingUserInput(): HTMLTemplateResult {
  return html`
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#ratingUserInput"
    >
      Rate
    </button>

    <div
      class="modal fade"
      id="ratingUserInput"
      tabindex="-1"
      area-labelledby="ratingUserInputLabel"
      area-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Here is the text</h5>
          </div>
          ${getModalFormHtml()}
        </div>
      </div>
    </div>
  `;
}

function getModalFormHtml(): HTMLTemplateResult {
  return html`
    <form>
      <div class="m-3">
        <label for="Name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="UserInput"
          aria-describedby="UserInputHelp"
        />
        <div id="UserInputHelp" class="form-text">
          Name is only used for filtering duplicate votes!
        </div>
      </div>
      <div class="m-3">
        ${labelAndInputNumber("Coffee")} ${labelAndInputNumber("Tosti")}
        ${labelAndInputNumber("Vibe")}
      </div>
      <div class="m-3">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  `;
}

function labelAndInputNumber(labelNameAndId: string): HTMLTemplateResult {
  return html`
    <div class="mb-2">
      <label for="${labelNameAndId}" class="form-label"
        >${labelNameAndId}</label
      >
      <input
        type="number"
        class="form-control"
        id="${labelNameAndId}"
        aria-describedby="UserRatingHelp"
        min="1"
        max="10"
      />
      <div id="UserRatingHelp" class="form-text">
        Only allowed 1-10 in rating.
      </div>
    </div>
  `;
}
