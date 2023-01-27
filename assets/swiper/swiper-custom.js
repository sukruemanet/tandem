
//Index
var swiper = new Swiper(".index-swiper", {
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      allowTouchMove: false,
    },
  }
});

//Trend
var swiper = new Swiper(".trend-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Carousel News
var swiper = new Swiper(".carousel-news-swiper", {
  spaceBetween: 20,
  slidesPerView: 1.8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 2.8,
    },
    1920: {
      slidesPerView: 3.8,
    },
    2560: {
      slidesPerView: 1.8,
    },
  }
});

//Product
var swiper = new Swiper(".product-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Carousel News
var swiper = new Swiper(".carousel-detail-swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    414: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
    2560: {
      slidesPerView: 4,
    },
  }
});

//Vision Carousel
var swiper = new Swiper(".vision-swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    414: {
      slidesPerView: 1.6,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
    2560: {
      slidesPerView: 4,
    },
  }
});

//Tab News
var swiper = new Swiper(".tabs-buttons", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});

//Carousel News
var swiper = new Swiper(".tabmenu-swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true, 
});





