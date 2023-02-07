
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

TweenMax.staggerFrom(".content-top span", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".content-top h2", 2, {
  delay: .5,
  autoAlpha: 0,
  y: 90,
  ease: Power4.out,
});

TweenMax.staggerFrom(".content-top h1", 2, {
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

//Menu
const tl1 = gsap.timeline();
const categoryMenu = gsap.timeline({
  paused: "true",
});

categoryMenu.to(".side-menu", 0.20, {
  autoAlpha: 1,
  visibility:"visible"
});

categoryMenu.to(".menu-container", {
  duration: 1,
  x: 0,
  ease:Power3.easeOut,
});
categoryMenu.from(
  ".menu-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
  "-=.2"
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
  "-=.2"
);

categoryMenu.to(
  ".search-content",
  {
    duration: .5,
    autoAlpha: 1,
  },
  "-=1.3"
);

categoryMenu.from(
  ".menu-item-name",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.3"
);
function menuOpen() {
  categoryMenu.play();
  smoother.paused(true);
}
function menuClose() {
  categoryMenu.reverse();
  smoother.paused(false);
}

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    categoryMenu.reverse();
    smoother.paused(false);
  }
});

gsap.to(document.body, {duration: 1, opacity: 1, ease: "power2.inOut"});

const button = document.querySelector("#myButton");

  button.addEventListener("click", function() {
    gsap.to(document.body, {duration: 1, ease: "power2.inOut"});
    setTimeout(() => {
      window.location.href = "next-page.html";
    }, 1000);
  });


  //menu Js
  $(function () {
    $(".menu-open").click(function (event) {
        event.stopPropagation();
        $('body').addClass("no-scroll");
        smoother.paused(true);
    });

    $(".menu-close").click(function (event) {
        event.stopPropagation();
        $('body').removeClass("no-scroll");
        smoother.paused(false);
    });
});