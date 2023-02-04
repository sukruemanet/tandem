
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

//Image Reval

gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((imagereval) => {
  let image = imagereval.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: imagereval,
      // toggleActions: "restart none none reset",
      toggleActions: "play none none none",
      // markers:true,
      start: "-10% 60%",
    }
  });

  tl.set(imagereval, { autoAlpha: 1 });
  tl.from(imagereval, 1.5, {
    xPercent: -100,
    ease: Power4.out,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.8,
    delay: -1.5,
    ease: Power4.out,
    duration: 0.8
  });
});

gsap.to('.start span', { delay:.5, duration: 0.8, y:"0%", stagger: 0.6, })


TweenMax.staggerFrom(".start .bottom", 2, {
  delay: 1,
  stagger: 0.6,
  opacity: 0,
  x: -10,
  ease: Expo.easeInOut
});


TweenMax.staggerFrom(".start-headline .caption", 2, {
  delay: 1,
  opacity: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".start-headline .info", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".content-top h1, .content-top span", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".content-top h1, .content-top h2", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".search-info span, .search-info h4, .search-info .search-box", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

const fadeInAnimated = gsap.utils.toArray('.fadeslideup');
fadeInAnimated.forEach((box, i) => {
  const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: 1.5, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });
});


gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector("#video")
ScrollTrigger.create({
    start: "top center",
    end: "bottom bottom",
    trigger: "#video",
    scale: 1,
    markes:true,
    onEnter: () => video.play(),
    onLeave: () => video.pause(),
    onEnterBack: () => video.play(),
});


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

// GSAP fade in efekti
var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
tl.to("#fadeBody", {delay: .3, duration: 2, opacity: 1, visibility: "visible"});

// Butona tıklama olayı
document.getElementById("button").addEventListener("click", function() {
  window.location.href = "nextPage.html";
});