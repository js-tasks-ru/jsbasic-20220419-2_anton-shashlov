//import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalClose();
    this.modalCloseAfterKeyEsc();
  }

  setTitle(text) {
    this.modalTitle = document.createElement('h3');
    this.modalTitle.className = "modal__title";
    this.modalTitle.innerHTML = text;
  }

  setBody(elem) {
    this.modalBody = document.createElement('div');
    this.modalBody.className = "modal__body";
    this.modalBody.append(elem);
  }

  open() {
    this.container = document.createElement('div');
    this.container.className = "container";
    
    this.modal = document.createElement('div');
    this.modal.className = "modal";

    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = "modal__overlay";

    this.modalInner = document.createElement('div');
    this.modalInner.className = "modal__inner";

    this.modalHeader = document.createElement('div');
    this.modalHeader.className = "modal__header";
    this.modalHeader.innerHTML = `<button type="button" class="modal__close">
    <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
    </button>`;
    
    this.container.prepend(this.modal);
    this.modal.prepend(this.modalOverlay);
    this.modal.append(this.modalInner);
    this.modalInner.prepend(this.modalHeader);
    this.modalHeader.append(this.modalTitle);
    this.modalInner.append(this.modalBody);

    document.body.classList.add('is-modal-open');
    
    return document.body.append(this.container);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    const container = document.body.querySelector('.modal');
    container.closest('.container').remove();
  }

  modalClose() {
    const close = this.close;
    document.body.addEventListener("click", function(event) {
      const target = event.target;
      if (!target.closest(".modal__close")) {
        return;
      }
      close();
    });
  }

  modalCloseAfterKeyEsc() {
    const close = this.close;
    document.body.addEventListener("keydown", function(event) {
      if (event.code == 'Escape') {
        close();
      }
    });
  }
}