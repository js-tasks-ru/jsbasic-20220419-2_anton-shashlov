import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createCarouselInner();
    this.createElem();
    this.scrollCarousel();
    this.createEventProductAdd();
  }
  createElem() {
    this.elem = document.createElement('div');
    this.carouselArrowRight = document.createElement('div');
    this.carouselArrowLeft = document.createElement('div');
    this.elem.className = 'carousel';
    this.carouselArrowRight.className = 'carousel__arrow carousel__arrow_right';
    this.carouselArrowLeft.className = 'carousel__arrow carousel__arrow_left';
    this.carouselArrowRight.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;
    this.carouselArrowLeft.innerHTML = `<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">`;
    this.elem.append(this.carouselArrowRight);
    this.elem.append(this.carouselArrowLeft);
    this.elem.append(this.carouselInner); 
  }
  createCarouselInner() {
    this.carouselInner = document.createElement('div');
    this.carouselInner.className = 'carousel__inner';
    let carouselSlide = '';
    for (let el of this.slides) {
      carouselSlide +=
      `<div class="carousel__slide" data-id="${el.id}">
         <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
         <div class="carousel__caption">
           <span class="carousel__price">€${el.price.toFixed(2)}</span>
           <div class="carousel__title">${el.name}</div>
           <button type="button" class="carousel__button">
             <img src="/assets/images/icons/plus-icon.svg" alt="icon">
           </button>
         </div>
      </div>`;
    }
    this.carouselInner.innerHTML = carouselSlide;
  }
  scrollCarousel() {
    const carouselArrowRight = this.carouselArrowRight;
    const carouselArrowLeft = this.carouselArrowLeft;
    const carouselInner = this.carouselInner;
    const countCarouselSlides = carouselInner.childElementCount;

    let widthCarouselSlide;
    let positionMargin = 0;
    carouselArrowLeft.style.display = 'none';
    
    carouselArrowLeft.onclick = function() {
      if (widthCarouselSlide !== carouselInner.firstElementChild.offsetWidth) {
        widthCarouselSlide = carouselInner.firstElementChild.offsetWidth;
        positionMargin = 0;
      }
      positionMargin += widthCarouselSlide;
      positionMargin = Math.min(positionMargin, 0);
      carouselInner.style.transform = `translateX(${positionMargin}px)`;
      hidingArrow();
    };
    
    carouselArrowRight.onclick = function() {
      if (widthCarouselSlide !== carouselInner.firstElementChild.offsetWidth) { //Чтобы не сбилась прокрутка слайдов если пользователь изменит размер окна
        widthCarouselSlide = carouselInner.firstElementChild.offsetWidth;
        positionMargin = 0;
      }
      positionMargin -= widthCarouselSlide;
      positionMargin = Math.max(positionMargin, -widthCarouselSlide * (countCarouselSlides - 1));
      carouselInner.style.transform = `translateX(${positionMargin}px)`;
      hidingArrow();
    };
  
    function hidingArrow () {
      positionMargin === -widthCarouselSlide * (countCarouselSlides - 1)
        ? carouselArrowRight.style.display = 'none'
        : carouselArrowRight.style.display = '';
  
      positionMargin === 0
        ? carouselArrowLeft.style.display = 'none'
        : carouselArrowLeft.style.display = '';
    } 
  }

  createEventProductAdd() {
    this.elem.addEventListener("click", function(event) {
      const target = event.target;
      if (target.parentElement.tagName !== 'BUTTON') {return;}
      
      const myEvent = new CustomEvent("product-add", { 
        detail: target.closest('.carousel__slide').dataset.id,
        bubbles: true, 
      });
      
      target.dispatchEvent(myEvent);
    });
  
    this.elem.addEventListener("product-add", function(event) {
      alert(event.detail);
    });
  } 
}
