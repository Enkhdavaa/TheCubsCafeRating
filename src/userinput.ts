import { html, type HTMLTemplateResult } from "lit-html";
import { RateCafeProduct } from "./api/rateCafeProduct.ts";

export function ratingUserInput(
  cafe: string,
  product: string
): HTMLTemplateResult {
  const uniqueId = cafe + "-" + product;
  return html`
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target=${"#" + uniqueId}
    >
      Rate
    </button>

    <div
      class="modal fade"
      id=${uniqueId}
      tabindex="-1"
      area-labelledby="ratingUserInputLabel"
      area-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Fill to rate the cafe</h5>
          </div>
          ${getModalFormHtml(cafe, product)}
        </div>
      </div>
    </div>
  `;
}

function getModalFormHtml(cafe: string, product: string): HTMLTemplateResult {
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
      <div class="m-3">${labelAndInputNumberHtml(cafe, product)}</div>
      <div class="m-3">
        <button
          type="submit"
          class="btn btn-primary"
          @click="${async () => {
            await RateCafeProduct("Anonym", cafe, product, 1);
          }}"
        >
          Submit
        </button>
      </div>
    </form>
  `;
}

function labelAndInputNumberHtml(
  cafe: string,
  product: string
): HTMLTemplateResult {
  return html`
    <div class="mb-2">
      <label for="${cafe + product}" class="form-label"
        >Rating ${product} from ${cafe}</label
      >
      <input
        type="number"
        class="form-control"
        id="${cafe + product}"
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
