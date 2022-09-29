const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".showcase-next",
    prevEl: ".showcase-prev",
  },

  // And if we need scrollbar
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
});

const mobileBtn = document.querySelector(".mobileBtn");
const mobileNav = document.querySelector(".mobileNav");

gsap.to(".circleAnim", { rotate: 360, duration: 10, ease: "none", repeat: -1 });
gsap.to(".tray", { x: "-150vw", duration: 10, ease: "none", repeat: -1 });

gsap.registerPlugin(ScrollTrigger);
const revealImgs = document.querySelectorAll(".reveal ");
revealImgs.forEach((reveal) => {
  gsap.from(reveal, {
    scrollTrigger: {
      trigger: reveal,
      start: "top center",
    },

    width: 0,
    duration: 1,
    ease: Power1.easeOut,
  });
});

const resizeImages = () => {
  revealImgs.forEach((reveal) => {
    gsap.to(reveal, {
      width: "100%",
      duration: 1,
      ease: Power1.easeOut,
    });
  });
};

const scrollNavs = document.querySelectorAll(".scrollNav");
console.log("scrool", scrollNavs);

const scrollPage = (val) => {
  mobileNav.classList.add("hidden");
  gsap.to(window, { duration: 1, scrollTo: val });
};

scrollNavs.forEach((nav) => {
  console.log(nav.getAttribute("data"));

  console.log(nav);
  nav.addEventListener("click", () => scrollPage(nav.getAttribute("data")));
});
window.addEventListener("resize", resizeImages);

// Mobile Navigation Toggle Toggle

const mobileNavToggle = () => {
  mobileNav.classList.toggle("hidden");
};
mobileBtn.addEventListener("click", () => mobileNavToggle());
mobileNav
  .querySelector(".close")
  .addEventListener("click", () => mobileNavToggle());
