//Smooth scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina() {
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

    //Footer animation 
    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%",
        },
    });

    //Letter animation
    const grupoTextoSplit = document.querySelectorAll(".textoSplit");

    grupoTextoSplit.forEach((textoUnicoSplit) => {
        const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines",
        });

        gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
            trigger: textoUnicoSplit,
        },
        });
    });
}

//Preload
const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});