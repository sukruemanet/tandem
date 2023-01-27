

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