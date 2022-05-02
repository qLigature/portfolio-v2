// For Typewriting Effect in Intro Text
const Typewriter = window.Typewriter;
const introTagline = document.getElementById("intro-tagline");

const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
const laptopWidth = 992;

const typewriter = new Typewriter(introTagline, {
  loop: true,
  delay: 60,
  deleteSpeed: 20,
});

const initialDelay = screenWidth > laptopWidth ? 1500 : 1300;
const waitTime = 1000;
const typeDelay = 500;

setTimeout(() => {
  typewriter
    .pauseFor(typeDelay)

    .typeString("experiences.")
    .pauseFor(waitTime)
    .deleteChars(12)
    .pauseFor(typeDelay)

    .typeString("websites.")
    .pauseFor(waitTime)
    .deleteChars(9)
    .pauseFor(typeDelay)

    .typeString("applications.")
    .pauseFor(waitTime)
    .deleteChars(13)
    .pauseFor(typeDelay)

    .typeString("solutions.")
    .pauseFor(waitTime)
    .deleteChars(10)

    .start();
}, initialDelay);

// Check if window has been scrolled from initial position
const main = document.querySelector("main");
const sidebarBtns = document.querySelector(".sidebar-btns");
const dummyDiv = document.querySelector(".random-div");
const socialLinks = document.querySelector(".social-links");

// Move sidebar buttons up when window is scrolled, up to a certain point
const sidebarLimit = 100;

if (screenWidth >= laptopWidth) {
  main.addEventListener("scroll", () => {
    // console.log(`(${main.scrollLeft}, ${main.scrollTop})`);

    if (main.scrollTop > sidebarLimit) return;
    if (main.scrollTop > 0) {
      dummyDiv.style.display = "block";
      socialLinks.style.display = "block";
      socialLinks.classList.remove("fade-out");
      socialLinks.classList.add("fade-in");
    } else {
      socialLinks.classList.remove("fade-in");
      socialLinks.classList.add("fade-out");
    }

    sidebarBtns.style.bottom = `${main.scrollTop}px`;
    socialLinks.style.bottom = `${main.scrollTop}px`;
  });
}
