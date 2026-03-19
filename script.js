//Smooth scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

//Hero animation 
gsap.from(".hero", {
    opacity: 0,
    duration: 1,
});

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
});

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
});

//Card animation 
gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true,
    },
});

//Session Thank You animation 
gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        start: "0% 80%",
        end: "100% 50%",
        scrub: true,
    },
});