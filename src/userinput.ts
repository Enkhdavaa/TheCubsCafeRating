import { html, type HTMLTemplateResult } from "lit-html";
import { RateCafeProduct } from "./api/rateCafeProduct.ts";

export function triggerBtnForModalHtml(
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
  const userNameInputId = "userName" + cafe + product;
  const scoreInputId = "score" + cafe + product;

  return html`
    <form>
      <div class="m-3">
        <label for="${userNameInputId}" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="${userNameInputId}"
          minlength="2"
          required
          aria-describedby="${userNameInputId}"
        />
        <div id="${userNameInputId}" class="form-text mb-2">
          Name is only used for filtering duplicate votes!
        </div>

        <label for="${scoreInputId}" class="form-label mb-2"
          >Rating ${product} from ${cafe}</label
        >
        <input
          type="number"
          class="form-control"
          id="${scoreInputId}"
          aria-describedby="${scoreInputId}"
          min="1"
          max="10"
          required
        />
        <div id="${scoreInputId}" class="form-text">
          Only allowed 1-10 in rating.
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary mx-3 mb-3"
        @click="${async () => {
          const inputUserName: HTMLInputElement = document.getElementById(
            userNameInputId
          ) as HTMLInputElement;

          const inputScore: HTMLInputElement = document.getElementById(
            scoreInputId
          ) as HTMLInputElement;

          const userName = inputUserName.value;
          const score = Number.parseInt(inputScore.value);

          if (score > 0 && score < 11) {
            await RateCafeProduct(userName, cafe, product, score);
            globalThis.alert(
              "We are going to see which cafe has the best product for Cubs. Thank you so much!"
            );
          }
        }}"
      >
        Submit
      </button>
    </form>
  `;
}
