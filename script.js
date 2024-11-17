const crsr = document.querySelector(".cursor");
const crsrBlur = document.querySelector(".cursor-blur");
const threeCards = document.querySelectorAll(".cards");
const OnHoverElements = document.querySelectorAll(
  "a, #logo, #nav-menu-icon, .card, .cards, .logo, .footer-links h4, .f-right h6"
);

gsap.to("nav", {
  backgroundColor: "black", // Animate background color change
  height: "100px", // Animate height change
  duration: 0.3, // Duration of the animation
  scrollTrigger: {
    trigger: "nav", // What element should trigger this animation
    scroller: "body",
    //   markers: true, // For debugging, remove this in production
    start: "top -13%",
    end: "top -8%", // Smooth transition over scroll
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "rgba(0, 0, 0,0.97)", // Animate background color change
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -32%",
    end: "top -90%",
    scrub: 2,
  },
});

gsap.to("#coln-1", {
  x: 12, // Animate background color change
  y: 22, // Animate background color change
  scrollTrigger: {
    trigger: "#coln-1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 68%",
    scrub: 2,
  },
});
gsap.to("#coln-2", {
  x: -12, // Animate background color change
  y: -22, // Animate background color change
  scrollTrigger: {
    trigger: "#coln-2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 82%",
    scrub: 2,
  },
});

gsap.from(".text-headline h2", {
  y: 32,
  opacity:0,
  duration:0.7,
  scrollTrigger: {
    trigger: ".text-headline h2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from(".cards", {
  y: 15,
  opacity:0,
  duration:0.3,
  scrollTrigger: {
    trigger: ".text-headline h2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 85%",
    scrub: 2,
  },
});

document.addEventListener("mousemove", function (e) {
  // Smooth movement for the main cursor
  gsap.to(crsr, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2, // Fast, responsive movement
    ease: "power2.out", // Smooth ease-out effect
  });

  // Trailing effect for the blurred cursor
  gsap.to(crsrBlur, {
    x: e.clientX - 250, // Adjusting the offset based on blur size
    y: e.clientY - 250,
    duration: 0.9, // Slower movement for a trailing effect
    ease: "power2.out",
  });
});

OnHoverElements.forEach(function (elem) {
  // On hover (mouseenter)
  elem.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 4.5, // Scale the cursor
      backgroundColor: "transparent", // Transparent background
      border: "0.05px solid #fff",
      duration: 0.2, // Smooth transition
      ease: "power2.out", // Smooth easing
    });
  });

  // On hover out (mouseleave)
  elem.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1, // Reset scale
      backgroundColor: "#a2ce2b", // Original background color
      border: "0px", // No border
      duration: 0.2, // Smooth transition back
      ease: "power2.out",
    });
  });
});

gsap.to(".scroll-container ", {
  x: -3000, // Move the text to the left
  duration: 14, // Time it takes to scroll across
  yoyo:true,
  ease: "linear", // Keeps the movement consistent
  repeat: -1, // Infinite loop
  delay: 1, // Delay before the animation starts
});

threeCards.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // Animate background size
    gsap.to(elem, {
      backgroundSize: "120%",
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate text color
    gsap.to(elem.querySelector("h4"), {
      color: "white",
      duration: 0.3,
      ease: "power2.out",
    });

    // Change text-stroke color
    gsap.to(".text-headline h2", {
      duration: 0.3,
      onStart: () => {
        document.querySelector(".text-headline h2").style.webkitTextStroke =
          "1px #9ecc20"; // New stroke color
      },
    });
  });

  elem.addEventListener("mouseleave", function () {
    // Reset background size
    gsap.to(elem, {
      backgroundSize: "100%",
      duration: 0.8,
      ease: "power2.out",
    });

    // Revert text color
    gsap.to(elem.querySelector("h4"), {
      color: "black",
      duration: 0.3,
      ease: "power2.out",
    });

    // Revert text-stroke color
    gsap.to(".text-headline h2", {
      duration: 0.3,
      onStart: () => {
        document.querySelector(".text-headline h2").style.webkitTextStroke =
          "1px #fff"; // Revert stroke color
      },
    });
  });
});
