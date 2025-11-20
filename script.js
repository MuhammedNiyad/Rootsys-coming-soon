gsap.registerPlugin(ScrollTrigger);

// Animate Hello → fade out + move up
gsap.to(".hello", {
  scrollTrigger: {
    trigger: ".panel-1",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -150,
  opacity: 0,
  ease: "power2.out"
});

// Animate Reintroducing → fade in + move up
gsap.from(".reintro", {
  scrollTrigger: {
    trigger: ".panel-2",
    start: "top bottom",
    end: "top center",
    scrub: true
  },
  y: 150,
  opacity: 0,
  ease: "power2.out"
});
