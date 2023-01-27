
//Text Effects
const quotes = document.querySelectorAll(".textanimated");

function setupSplits() {
  $(document).ready(function () {
    $(".split-line").wrap('<div class="split-parent"></div>');
  });


  quotes.forEach(textanimated => {

    textanimated.split = new SplitText(textanimated, {
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    textanimated.anim = gsap.from(textanimated.split.lines, {
      scrollTrigger: {
        trigger: textanimated,
        // toggleActions: "restart pause resume reverse",
        toggleActions: 'play none none none',
        // start: "50% 60%",
        start: "-40% 60%",
        // markers:true,
      },
      duration: 0.6,
      ease: "circ.out",
      yPercent: 100,
      stagger: 0.2,
    });
  });
}

// ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();


//Start Image Animated

gsap.registerPlugin(ScrollTrigger);



//FadeIn Text
const cardLine = gsap.utils.toArray('.card-line');
cardLine.forEach((box, i) => {
  const anim = gsap.fromTo(box, { autoAlpha: 0, height: 0, }, { height:"100%", autoAlpha: 1, duration:3, });
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });
});

//News Slider
gsap.registerPlugin(ScrollTrigger);
gsap.set('.news-item', {
  opacity: 0,
  y: 75,
  scale: 0.9,
});

ScrollTrigger.batch('.index-news', {
  onEnter: batch => {
    batch.forEach((card, index) => gsap.to(card.children, { opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3, }))
  },
  once: true,
  // markers:true 
});

//Services Slider
gsap.set('.services-item', {
  opacity: 0,
  y: 600,
  scale: 0.4,
});

ScrollTrigger.batch('.index-services', {
  onEnter: batch => {
    batch.forEach((card, index) => gsap.to(card.children, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.5, delay: index * 0.3, }))
  },
  once: true,
});

//Investor
gsap.set('.investor-item .caption', {
  opacity: 0,
  y: 600,

});

ScrollTrigger.batch('.investor-item', {
  onEnter: batch => {
    batch.forEach((card, index) => gsap.to(card.children, { opacity: 1, y: 0, duration: 1, stagger: 0.5, delay: index * 0.3, }))
  },
  start: '40% bottom',
  once: true,
});

//Hamburger Menu
const tl1 = gsap.timeline();
const categoryMenu = gsap.timeline({
  paused: "true",
});

categoryMenu.to(".hamburger-menu", 0.20, {
  autoAlpha: 1,
  visibility:"visible"
});

categoryMenu.to(".hamburger-menu-content",{
  duration: .5,
  y: 0,
  ease:Power3.easeOut,
});

categoryMenu.from(
  ".menu-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
  "-=.1"
);

categoryMenu.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.1"
);

categoryMenu.from(
  ".line-v",
  {
    duration: .5,
    stagger: {
      amount: 0.5,
    },
    height: "0%",
  },
);

categoryMenu.from(
  ".menu-item-name",
  {
    duration: .5,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1"
);

categoryMenu.to(
  ".accordion-menu-item",
  {
    duration: 1,
    autoAlpha: 1,
    y: 0,
  },
  "-=1"
);

categoryMenu.to(
  ".social-contact",
  {
    duration: 1,
    autoAlpha: 1,
    y: 0,
  },
  "-=1"
);

categoryMenu.to(
  ".menu-bottom span",
  {
    duration: .5,
    autoAlpha: 1,
    y: 0,
  },
);

function menuOpen() {
  categoryMenu.play();
  smoother.paused(true);
}
function menuClose() {
  categoryMenu.reverse();
  smoother.paused(false);
}


//Filter Menu
const tl5 = gsap.timeline();
const filterMenu = gsap.timeline({
  paused: "true",
});

filterMenu.to(".filter-menu", 0.20, {
  autoAlpha: 1,
  visibility:"visible"
});

filterMenu.to(".filter-content",{
  duration: .5,
  y: 0,
  ease:Power3.easeOut,
});

filterMenu.from(
  ".filterline",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);

filterMenu.from(
  ".filter-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
  "-=.1"
);

filterMenu.to(
  ".filter-options",
  {
    duration: 1,
    autoAlpha: 1,
    y: 0,
  },
  "-=1"
);

function filterOpen() {
  filterMenu.play();
  smoother.paused(true);
}
function filterClose() {
  filterMenu.reverse();
  smoother.paused(false);
}

//Search Menu
const tl2 = gsap.timeline();
const searchMenu = gsap.timeline({
  paused: "true",
});

searchMenu.to(".search-menu", 0.10, {
  autoAlpha: 1,
  visibility:"visible"
});

searchMenu.to(".search-content", {
  duration: .8,
  y: 0,
  ease:Power3.easeOut,
});

searchMenu.from(
  ".searchline",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);

searchMenu.from(
  ".search-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
  "-=.2"
);

function searchOpen() {
  searchMenu.play();
  smoother.paused(true);
}
function searchClose() {
  searchMenu.reverse();
  smoother.paused(false);
}

//Lang Menu
const tl3 = gsap.timeline();
const langMenu = gsap.timeline({
  paused: "true",
});

langMenu.to(".lang-modal", 0.60, {
  autoAlpha: 1,
  visibility:"visible",
  ease:Power3.easeIn,
});

langMenu.to(".lang-content", 1, {
  autoAlpha: 1,
  visibility:"visible",
  duration: 1,
  y: 0,
  ease:Power3.easeOut,
});

langMenu.from(
  ".lang-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
);

function langOpen() {
  langMenu.play();
  smoother.paused(true);
}
function langClose() {
  langMenu.reverse();
  smoother.paused(false);
}


//Lang Menu
const tl4 = gsap.timeline();
const mapModal = gsap.timeline({
  paused: "true",
});

mapModal.to(".map-modal", 0.60, {
  autoAlpha: 1,
  visibility:"visible",
  ease:Power3.easeIn,
});

mapModal.to(".map-content", 1, {
  autoAlpha: 1,
  visibility:"visible",
  duration: 1,
  y: 0,
  ease:Power3.easeOut,
});

mapModal.from(
  ".map-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
);

function mapOpen() {
  mapModal.play();
  smoother.paused(true);
}
function mapClose() {
  mapModal.reverse();
  smoother.paused(false);
}



$(document).click(function (event) {
  if (!$(event.target).closest('.map-content, .map-button, .lang-content, lang-button, .search-button, .search-content').length) {
    mapModal.reverse();
    langMenu.reverse();
    searchMenu.reverse();
    smoother.paused(false);
  }
});


$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $('body').removeClass('no-scroll');
    $("#hamburger-menu").removeClass("open");
    $('.menu-tab .tabs section').removeClass("active");
    categoryMenu.reverse();
    searchMenu.reverse();
    langMenu.reverse();
    mapModal.reverse();
    smoother.paused(false);
  }
});

//Number Animated
$(".countnumber").each(function(index, element) {
  var count = $(this),
      zero = {val:0},
      num = count.data("number"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      val: num,
      duration: 7,
      scrollTrigger: element,
      onUpdate: function() {
        count.text(zero.val.toFixed(decimals));
      }
    });
});


//Change Bg
gsap.registerPlugin(ScrollTrigger);
gsap.to('.history-content',{
  scrollTrigger:{
    trigger: ".changebg",
    start:'top top',
    end:"9999",
    // markers:true,
    toggleClass:{targets: ".history-content", className: "active"}
  }, 
})

mm.add("(min-width: 1024px)", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".index-slider .video", {y:"-100%", scale: 3, willChange: "transform", ease:Power3.easeIn,} , {y:"0", scale: 1, duration: 3,});
  gsap.fromTo(".start-image .image-cover img", {scale: 2, willChange: "transform", ease:Power3.easeIn,} , {scale: 1, duration: 3,});

  const imageScale = gsap.utils.toArray('.imageScale');
  imageScale.forEach((box, i) => {
    const anim = gsap.fromTo(box, { scale:1.6, }, { duration: 3, scale:1, });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

  //Fadeup
  const fadeupAnimated = gsap.utils.toArray('.fadeup');
  fadeupAnimated.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

  //News Slider
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.slideItem', {
    opacity: 0,
    y: 75,
    scale: 0.9,
  });

  ScrollTrigger.batch('.slideItems', {
    onEnter: batch => {
      batch.forEach((card, index) => gsap.to(card.children, { opacity: 2, y: 0, stagger: 0.3, delay: index * 0.3, }))
    },
    once: true,
  });
});