'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


const preloader2 = document.querySelector("[data-preload-2]");

window.addEventListener("load", function () {
  preloader2.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);




/**
 * HEADER
 */

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;

  if(isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY
}

window.addEventListener("scroll", function() {
  if(window.scrollY > 50){
    header.classList.add("active");
    hideHeader();
  }else {
    header.classList.remove("active");
  }
})



const header2 = document.querySelector("[data-header-2]");

let lastScrollPos2 = 0;

const hideHeader2 = function () {
  const isScrollBottom2 = lastScrollPos2 < window.scrollY;

  if(isScrollBottom2) {
    header2.classList.add("hide");
  } else {
    header2.classList.remove("hide");
  }

  lastScrollPos2 = window.scrollY
}

window.addEventListener("scroll", function() {
  if(window.scrollY > 50){
    header2.classList.add("active");
    hideHeader2();
  }else {
    header2.classList.remove("active");
  }
})



const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 6000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);

const heroSlider2 = document.querySelector("[data-hero-slider2]");
const heroSliderItems2 = document.querySelectorAll("[data-hero-slider-item2]");
const heroSliderPrevBtn2 = document.querySelector("[data-prev-btn2]");
const heroSliderNextBtn2 = document.querySelector("[data-next-btn2]");

let currentSlidePos2 = 0;
let lastActiveSliderItem2 = heroSliderItems2[0];

const updateSliderPos2 = function () {
  lastActiveSliderItem2.classList.remove("active");
  heroSliderItems2[currentSlidePos2].classList.add("active");
  lastActiveSliderItem2 = heroSliderItems2[currentSlidePos2];
}

const slideNext2 = function () {
  if (currentSlidePos2 >= heroSliderItems2.length - 1) {
    currentSlidePos2 = 0;
  } else {
    currentSlidePos2++;
  }

  updateSliderPos2();
}

heroSliderNextBtn2.addEventListener("click", slideNext2);

const slidePrev2 = function () {
  if (currentSlidePos2 <= 0) {
    currentSlidePos2 = heroSliderItems2.length - 1;
  } else {
    currentSlidePos2--;
  }

  updateSliderPos2();
}

heroSliderPrevBtn2.addEventListener("click", slidePrev2);

/**
 * auto slide
 */

let autoSlideInterval2;

const autoSlide2 = function () {
  autoSlideInterval2 = setInterval(function () {
    slideNext2();
  }, 6000);
}

addEventOnElements([heroSliderNextBtn2, heroSliderPrevBtn2], "mouseover", function () {
  clearInterval(autoSlideInterval2);
});

addEventOnElements([heroSliderNextBtn2, heroSliderPrevBtn2], "mouseout", autoSlide2);

window.addEventListener("load", autoSlide2);