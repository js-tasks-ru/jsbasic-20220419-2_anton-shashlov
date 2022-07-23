import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createElem();
    this.scrollRibbon();
    this.createEventRibbon();
  }
  createElem() {
    this.elem = document.createElement('div');
    this.elem.className = 'ribbon';
    
    this.ribbonArrowLeft = document.createElement('button');
    this.ribbonArrowLeft.className = 'ribbon__arrow ribbon__arrow_left ribbon__arrow_visible';
    this.ribbonArrowLeft.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';
   
    this.ribbonArrowRight = document.createElement('button');
    this.ribbonArrowRight.className = 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible';
    this.ribbonArrowRight.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';
  
    this.ribbonInner = document.createElement('nav');
    this.ribbonInner.className = 'ribbon__inner';

    let ribbonItem = '';
    for (let el of this.categories) {
      ribbonItem +=
      `<a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>`;
    }
    this.ribbonInner.innerHTML = ribbonItem;
    this.ribbonInner.firstElementChild.className = "ribbon__item ribbon__item_active";

    this.elem.prepend(this.ribbonArrowRight);
    this.elem.prepend(this.ribbonInner);
    this.elem.prepend(this.ribbonArrowLeft);
  }
  scrollRibbon() {
    const ribbonInner = this.ribbonInner;
    const ribbonArrowLeft = this.ribbonArrowLeft;
    const ribbonArrowRight = this.ribbonArrowRight;

    this.elem.addEventListener('click', function(event) {
      const buttonTarget = event.target.closest('BUTTON');
      if (!buttonTarget) {
        return;
      }
      
      switch (buttonTarget) {
      case ribbonArrowLeft:
        if (ribbonInner.scrollLeft > 0) {
          ribbonArrowLeft.classList.add("ribbon__arrow_visible");
          ribbonArrowRight.classList.add("ribbon__arrow_visible");
        } else {
          ribbonArrowLeft.classList.remove("ribbon__arrow_visible");
        }
        ribbonInner.scrollBy(-350, 0);
        break;

      case ribbonArrowRight:
        if (ribbonInner.scrollWidth - (ribbonInner.clientWidth + ribbonInner.scrollLeft) > 1) {
          ribbonArrowLeft.classList.add("ribbon__arrow_visible");
          ribbonArrowRight.classList.add("ribbon__arrow_visible");
        } else {
          ribbonArrowRight.classList.remove("ribbon__arrow_visible");
        }
        ribbonInner.scrollBy(350, 0);
        break;
      }
    });
  }
  createEventRibbon() {
    const ribbonInner = this.ribbonInner;

    this.elem.addEventListener("click", function(event) {
      event.preventDefault();
      const target = event.target;
      if (target.parentElement.tagName !== 'NAV') {
        return;
      }
      
      for (let a of ribbonInner.children) {
        a.classList.remove('ribbon__item_active');
      }
      
      target.closest('.ribbon__item').classList.add('ribbon__item_active');
      
      const myEvent = new CustomEvent('ribbon-select', { 
        detail: target.closest('.ribbon__item').dataset.id,
        bubbles: true, 
      });
      
      target.dispatchEvent(myEvent);
    });
  
    this.elem.addEventListener("ribbon-select", function(event) {
      //alert(event.detail);
    });
  } 
}

//alert(buttonTarget === ribbonArrowLeft);
      //alert(!target.tagName('BUTTON'));
      /* alert(`ribbonInner.scrollLeft ${ribbonInner.scrollLeft}, 
             ribbonInner.scrollWidth ${ribbonInner.scrollWidth},
             ribbonInner.clientWidth ${ribbonInner.clientWidth},
             ribbonInner.clientWidth + ribbonInner.scrollLeft ${ribbonInner.clientWidth + ribbonInner.scrollLeft},

      `); */