
function initCarousel() {
  const carouselArrowRight = document.querySelector ('[class="carousel__arrow carousel__arrow_right"]');
  const carouselArrowLeft = document.querySelector ('[class="carousel__arrow carousel__arrow_left"]');
  const carouselInner = document.querySelector (".carousel__inner");
  const carouselSlide = document.querySelector (".carousel__slide");

  const widthCarouselSlide = carouselSlide.offsetWidth;
  const countCarouselSlides = carouselInner.childElementCount;
  let positionMargin = 0;
  carouselArrowLeft.style.display = 'none';
  
  carouselArrowLeft.onclick = function() {
    positionMargin += widthCarouselSlide;
    positionMargin = Math.min(positionMargin, 0);
    carouselInner.style.transform = `translateX(${positionMargin}px)`;
    hidingArrow();
  };
  
  carouselArrowRight.onclick = function() {
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
initCarousel();