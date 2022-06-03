//Anton Shashlov
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.createElem();
    this.createEventList();
  }
  createElem() {
    this.elem = document.createElement('div');
    this.elem.className = 'card';
    this.elem.innerHTML = 
    `<div class="card__top">
      <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
      <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`;
    
  }
  createEventList() {
    const myEvent = new CustomEvent("product-add", { 
      detail: this.product.id,
      bubbles: true, 
    });

    this.elem.addEventListener("click", function(event) {
      const target = event.target;
      if (!target.parentElement.classList.contains("card__button")) {return;}
      target.dispatchEvent(myEvent);
    });

    this.elem.addEventListener("product-add", function(event) {
      alert(event.detail);
    });
  } 
}