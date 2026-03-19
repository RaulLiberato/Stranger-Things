//Smooth scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

//Animation Hero
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