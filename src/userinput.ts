import { html, type HTMLTemplateResult } from "lit-html";

export function ratingUserInput(): HTMLTemplateResult {
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
        <label for="Rating" class="form-label">Rating</label>
        <input
          type="number"
          class="form-control"
          id="UserInput"
          aria-describedby="UserRatingHelp"
          min="1"
          max="10"
        />
        <div id="UserRatingHelp" class="form-text">
          Only allowed 1-10 in rating.
        </div>
      </div>
      <div class="m-3">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  `;
}
