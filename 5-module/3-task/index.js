function initCarousel() {
  const carousel = document.querySelector(".carousel__inner");
  const slidesLength = carousel.querySelectorAll(".carousel__slide").length;

  let indexOfVisibleSlide = 1;

  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  carouselArrowRight.addEventListener("click", () => {
    const translatedValue = carousel.offsetWidth * indexOfVisibleSlide * -1;

    if (indexOfVisibleSlide !== slidesLength) {
      translateX(carousel, translatedValue);
      indexOfVisibleSlide++;

      if (indexOfVisibleSlide === slidesLength) {
        hideElement(carouselArrowRight);
      }
    }

    if (!isVisible(carouselArrowLeft) && indexOfVisibleSlide > 1) {
      showElement(carouselArrowLeft);
    }
  });

  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  carouselArrowLeft.addEventListener("click", () => {
    const translatedValue =
      getComputedTranslate(carousel) + carousel.offsetWidth;

    if (indexOfVisibleSlide !== 1) {
      translateX(carousel, translatedValue);
      showElement(carouselArrowRight);
      indexOfVisibleSlide--;
    } else {
      hideElement(carouselArrowLeft);
    }
  });

  hideElement(carouselArrowLeft);
}

function translateX(element, translatedValue) {
  element.style.transform = `translateX(${translatedValue}px)`;
}

function hideElement(element) {
  element.style.display = "none";
}

function showElement(element) {
  element.style.display = "flex";
}

function isVisible(element) {
  return element.style.display !== "none";
}

function getComputedTranslate(element) {
  const transform = element.style.transform;

  return parseInt(transform.match(/-\d+/));
}
