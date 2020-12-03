//Scroll Down Function
function scrollPage() {
  window.scrollBy(0, window.innerHeight);
}

// Parallax Animation
gsap.utils.toArray("section").forEach((section, i) => {
  // Style the first section background to be positioned against the top.
  if (i === 0) {
    section.style.backgroundPosition = "50% 0px";
    gsap.to(section, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  } else {
  }
});

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// Section-1
tl.to("#section-1", { opacity: 1, duration: 2, delay: 1 });
tl.fromTo(
  "#sec1-text",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1.5 },
  "-=1.5"
);
tl.fromTo(
  "#sec1-desc",
  { opacity: 0, y: 70 },
  { opacity: 1, y: 0, duration: 1.5 },
  "-=0.8"
);
tl.fromTo(
  "#sec1-desc2",
  { opacity: 0, x: 50 },
  { opacity: 1, x: 0, duration: 1.5 },
  "-=1.5"
);
tl.fromTo(
  "#sec1-line",
  { opacity: 0, x: -50 },
  { opacity: 1, x: 0, duration: 1.5 },
  "-=1.2"
);
tl.fromTo(
  ".button",
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 2 },
  "-=1.5"
);

//GSAP Scroll Trigger

//Section-2 scroll animation
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",
    scrub: 1,
  },
  y: 50,
  scale: 1.03,
  duration: 1.5,
});

//Section-3 scroll animation

gsap.from("#sec3-text", {
  scrollTrigger: {
    trigger: "#sec3-text",
  },
  opacity: 0.75,
  x: 100,
  duration: 1.5,
});
gsap.from("#sec3-desc", {
  scrollTrigger: {
    trigger: "#sec3-desc",
  },
  x: -100,
  duration: 1.5,
});
gsap.from("#sec3-desc2", {
  scrollTrigger: {
    trigger: "#sec3-desc2",
  },
  x: 50,
  duration: 1.5,
});
gsap.from("#sec3-line", {
  scrollTrigger: {
    trigger: "#sec3-line",
  },
  x: -100,
  duration: 1.5,
});

//Section-4 scroll animation

gsap.from("#section-4 img", {
  scrollTrigger: {
    trigger: "#section-4 img",
  },
  opacity: 0.5,
  y: 50,
  scale: 1.1,
  duration: 1.5,
});
gsap.from(".carousel-text", {
  scrollTrigger: {
    trigger: ".carousel-text",
  },
  opacity: 0.5,
  x: 100,
  duration: 1.5,
});

//Section-5 scroll animation

gsap.from("#section-5 .card", {
  scrollTrigger: {
    trigger: "#section-5 .card",
    scrub: 1,
  },
  y: -20,
  scale: 1.04,
  duration: 1.5,
});

//Footer animation

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
  },
  opacity: 0.5,
  y: 20,
  duration: 1.5,
});
