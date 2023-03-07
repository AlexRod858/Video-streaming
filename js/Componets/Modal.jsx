class Modal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <vi-deo />
      </div>
    </div>
  </div>`
  }
}

customElements.define('mo-dal', Modal);
