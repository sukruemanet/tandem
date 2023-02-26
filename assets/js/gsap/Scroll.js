

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const mm = gsap.matchMedia();
   
let smoother;
   
mm.add("(min-width: 1024px)", () => {

   smoother = ScrollSmoother.create({
    wrapper: "#smoother-wrapper",
    content: "#smoother-content",
    smooth: 1,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
  });


  return () => smoother.kill();
  
});

gsap.utils.toArray(".start-headline ul li a").forEach(function (button, i) {
  button.addEventListener("click", (e) => {
    var id = e.target.getAttribute("href");
    console.log(id);
    smoother.scrollTo(id, true, "top top");
    e.preventDefault();
  });
});
  


gsap.registerPlugin(ScrollTrigger);

let bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });
ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});
bodyScrollBar.addListener(ScrollTrigger.update);


smoother.effects(".image_cont img", { speed: "auto" });

let textItems = gsap.utils.toArray('.text-animation');

textItems.forEach((scopedText) => {
    //split the text and get the characters in that specific text block
    let mySplitText = new SplitText(scopedText, { type: "words,chars" });
    let chars = mySplitText.chars;
    // then loop around the characters
    chars.forEach((char, i) => {
        smoother.effects(char, { speed: 1, lag: (i + 1) * 0.05 });
    });
})

