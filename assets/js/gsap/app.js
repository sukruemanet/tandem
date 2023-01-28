
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
      toggleActions: "restart none none reset"
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

gsap.to('span', { delay:.5, duration: 0.8, y:"0%", stagger: 0.6, })


TweenMax.staggerFrom(".bottom", 2, {
  delay: 1,
  stagger: 0.6,
  opacity: 0,
  x: -10,
  ease: Expo.easeInOut
});