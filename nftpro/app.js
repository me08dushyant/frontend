const mainBG = document.querySelector(".mainBG");
const mobileMenu = document.querySelector(".mobileMenu");
const menuIO = document.querySelector(".menu-io");
const dayNightBtn = document.querySelector(".dayNightBtn");
const night = document.querySelector(".nightCon");
const day = document.querySelector(".dayCon");
const navBar = document.querySelector(".navBar");
const walletBtn = document.querySelector(".walletBtn");
const navShadow = document.querySelector(".navShadow");
const faqs = document.querySelectorAll(".faq .box");
const roadmapTray = document.querySelectorAll(".roadmap .tray ");
const roadmapBoxs = document.querySelectorAll(".roadmap .tray .box");
const roadmapHelper = document.querySelector(".roadmap .helper");
const hero = document.querySelector(".hero");
const investors = document.querySelector(".investors");
const mint = document.querySelector(".mint");
const count = document.querySelector(".count");
const platform = document.querySelector(".platform");
const galleryCon = document.querySelector(".galleryCon");
const roadmapCon = document.querySelector(".roadmapCon");
const artistCon = document.querySelector(".artistCon");
const faqCon = document.querySelector(".faqCon");
const lastCon = document.querySelector(".lastCon");

const nav = document.querySelectorAll("a");

nav.forEach((el) => {
  const data = el.getAttribute("data");
  console.log("data", el.getAttribute("data"));
  el.addEventListener("click", (el) => {
    scrollBy(document.getElementById(data), 600);
  });
});

mobileMenu.querySelectorAll(".box a").forEach((el) => {
  const data = el.getAttribute("data");
  console.log("data", el.getAttribute("data"));
  el.addEventListener("click", (el) => {
    menuToggle(), scrollBy(document.getElementById(data), 600);
  });
});

console.log("nav", mobileMenu.querySelector(".box").children);
menuIO.open = false;
console.log(menuIO.open);
const menuToggle = () => {
  menuIO.open = !menuIO.open;
  menuIO.querySelector(".menu-open").style.display = menuIO.open
    ? "inline"
    : "none";
  menuIO.querySelector(".menu-close").style.display = !menuIO.open
    ? "inline"
    : "none";
  mobileMenu.style.display = !menuIO.open ? "flex" : "none";
};

menuToggle();

menuIO.addEventListener("click", () => menuToggle());

var startingTL = gsap.timeline();

const SlideIn = (el, val) => {
  gsap.from(
    el,
    {
      scrollTrigger: {
        trigger: el,
        start: "-600, center",
      },
      opacity: 0,
      y: val,
      stagger: 0.12,
      duration: 1,
      ease: "Power4.easeOut",
    },
    "-=0.70"
  );
  console.log("anuimValue", val);
};
SlideIn(navBar.children, -50);
SlideIn(navBar.querySelector(".nav .main").children, -50);
SlideIn(navBar.querySelector(".nav .social").children, -50);
SlideIn(hero.querySelector(".card").children, 50);
SlideIn(hero.querySelector(".wallpaper").children, 50);
SlideIn([investors.children[0], investors.children[1].children], 50);
SlideIn([mint.children[0], mint.querySelector(".cardCon").children], 50);
SlideIn(count.children, 50);
SlideIn(platform.querySelector(".heading"), 50);
SlideIn(platform.querySelectorAll([".block", ".tag", ".case", ".figure"]), 50);
SlideIn(
  [
    galleryCon.querySelector(".heading"),
    galleryCon.querySelector(".gallery").children,
    galleryCon.querySelector(".ctaBtn"),
  ],
  50
);

SlideIn(roadmapCon.querySelectorAll([".heading", ".box"]), 50);
SlideIn(artistCon.querySelectorAll([".heading", ".box"]), 50);
SlideIn(faqCon.querySelectorAll([".heading", ".box"]), 50);
SlideIn(
  lastCon.querySelectorAll(".heading", ".ctaBtn", ".logo", ".copy", "social"),
  50
);

let trayIndex = 0;
const RoadmapMove = (val) => {
  trayIndex += val;
  trayIndex <= 0
    ? ((trayIndex = 0),
      (roadmapHelper.querySelector(".left").style.opacity = 0.5))
    : (roadmapHelper.querySelector(".left").style.opacity = 1);
  trayIndex >= roadmapBoxs.length - 1
    ? ((trayIndex = roadmapBoxs.length - 1),
      (roadmapHelper.querySelector(".right").style.opacity = 0.5))
    : (roadmapHelper.querySelector(".right").style.opacity = 1);

  let left = roadmapHelper.offsetLeft;
  let width = roadmapHelper.offsetWidth;
  gsap.to(roadmapTray, {
    x: -40 * trayIndex + left + width * trayIndex * -1,
    duration: 0.3,
    ease: "Power3.easeInOut",
  });

  console.log(trayIndex);
};
RoadmapMove(0);
roadmapHelper.querySelector(".left").addEventListener("click", () => {
  RoadmapMove(-1);
});

roadmapHelper.querySelector(".right").addEventListener("click", () => {
  RoadmapMove(+1);
});

const FadeIn = (el) => {
  el.style.display = "block";
  gsap.to(el, { opacity: 1, duration: 0.15 });
};

const FadeOut = (el) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.15,
    onComplete: () => {
      el.style.display = "none";
    },
  });
};

faqs.forEach((box, index) => {
  index ? (box.active = false) : (box.active = true);
  box.addEventListener("click", () => FaqToggle(index));
});

const FaqToggle = (val) => {
  faqs.forEach((box, index) => {
    index == val ? (box.active = true) : (box.active = false);
    let copy = box.querySelector(".copy");
    if (box.active) {
      gsap.to(copy, {
        height: "auto",
        transformOrigin: "center top",
        duration: 0.3,
      });
      box.querySelector(".bar .icon .plus").style.display = "none";
      box.querySelector(".bar .icon .minus").style.display = "block";
    } else {
      // FadeOut(box.querySelector(".copy"));
      // gsap.to(copy, { y: -150, duration: 0.15 });
      gsap.to(copy, {
        height: "0px",
        transformOrigin: "center top",
        duration: 0.3,
      });
      box.querySelector(".bar .icon .plus").style.display = "block";
      box.querySelector(".bar .icon .minus").style.display = "none";
    }
    console.log(box.querySelector(".copy"));
  });
};

FaqToggle(0);

dayNightBtn.night = true;
// stylesheet

const clrOne = "#10051E";
const DarkGray = "#0F051D";

const ScaleIn = (el) => {
  gsap.to(el, { scale: 1.3, opacity: 1, duration: 0.15 });
};
const ScaleOut = (el) => {
  gsap.to(el, {
    scale: 1,
    opacity: 0.5,
    duration: 0.15,
  });
};

const ThemeWhite = () => {
  FadeIn(night);
  FadeOut(day);
  mainBG.style.backgroundColor = "#ede9fe";
  mobileMenu.style.backgroundColor = "#ede9fe";
  document.body.style.setProperty("--primary-color", DarkGray);
};

const ThemeBlack = () => {
  FadeIn(day);
  FadeOut(night);
  mainBG.style.backgroundColor = clrOne;
  mobileMenu.style.backgroundColor = clrOne;

  document.body.style.setProperty("--primary-color", "#ede9fe");
};
ScaleOut(dayNightBtn);

dayNightBtn.night ? ThemeBlack() : ThemeWhite();

const themeToggle = () => {
  dayNightBtn.night = !dayNightBtn.night;
  dayNightBtn.night ? ThemeBlack() : ThemeWhite();
  walletInteraction(false);
};

const walletInteraction = (val) => {
  walletBtn.active = val;
  console.log(walletBtn.active);
  if (val == true) {
    gsap.to(walletBtn, { backgroundColor: "#9c33f9", duration: 0.15 });
    gsap.to(walletBtn, { color: "#ffffff", duration: 0.15 });
  } else {
    gsap.to(walletBtn, { backgroundColor: "#9c33f900", duration: 0.15 });
    dayNightBtn.night
      ? gsap.to(walletBtn, { color: "#ffffff", duration: 0.15 })
      : gsap.to(walletBtn, { color: "#000000", duration: 0.15 });
  }
};

walletBtn.addEventListener("mouseover", () => walletInteraction(true));
walletBtn.addEventListener("mouseout", () => walletInteraction(false));
dayNightBtn.addEventListener("mouseover", () => ScaleIn(dayNightBtn));
dayNightBtn.addEventListener("mouseout", () => ScaleOut(dayNightBtn));
dayNightBtn.addEventListener("click", themeToggle);

const Scroller = () => {
  if (window.scrollY > 150) {
    gsap.to(navShadow, { y: 90, duration: 0.3 });
    console.log(window.scrollY);
  } else {
    gsap.to(navShadow, { y: 0, duration: 0.3 });
  }
};

const Resize = () => {
  RoadmapMove(0);
  console.log("resize");
};

window.addEventListener("scroll", Scroller);
window.addEventListener("resize", Resize);

function scrollBy(el, duration) {
  // var initialY = document.body.scrollTop * 0;
  var initialY = window.scrollY;
  var distance = el.offsetTop + 350 - screen.height * 0.5 - window.scrollY;
  var y = initialY + distance;
  var baseY = (initialY + y) * 0.5;
  var difference = initialY - baseY;
  var startTime = performance.now();

  function step() {
    var normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) normalizedTime = 1;

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

function scrollByx(el, duration) {
  var initialY = document.body.scrollTop;
  var distance = el.offsetTop - el.offsetHeight + screen.height * 0.5;
  var y = initialY + distance;
  var baseY = (initialY + y) * 0.5;
  var difference = initialY - baseY;
  var startTime = performance.now();

  function step() {
    var normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) normalizedTime = 1;

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

// preloadImages([
//   "https://unistudio.co/html/nerko/assets/images/artwork/01.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/02.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/03.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/04.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/05.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/06.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/07.jpg",
//   "https://unistudio.co/html/nerko/assets/images/artwork/08.jpg",
// ]);
