import { html, type HTMLTemplateResult } from "lit-html";

export function triggerBtnForModalHtml(
  cafe: string,
  product: string
): HTMLTemplateResult {
  const uniqueId = (cafe + "-" + product).replace(/\s+/g, "-");
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
    <form @submit=${sendToBackend} method="post" action="/api/addReview">
      <div class="m-3">
        <label for="${userNameInputId}" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="${userNameInputId}"
          minlength="2"
          required
          aria-describedby="${userNameInputId}"
          name="user"
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
          step="1"
          name="score"
        />
        <!-- Fields are hidden and used for tranfering data on submit form. -->
        <input type="hidden" name="cafe" value="${cafe}" />
        <input type="hidden" name="product" value="${product}" />

        <div id="${scoreInputId}" class="form-text">
          Only allowed 1-10 in rating.
        </div>
      </div>

      <button type="submit" class="btn btn-primary mx-3 mb-3">Submit</button>
    </form>
  `;
}

function sendToBackend() {
  globalThis.alert(
    "We are going to see which cafe has the best product for Cubs. Thank you so much!"
  );
}
