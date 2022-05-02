const Typewriter = window.Typewriter;
const introTagline = document.getElementById("intro-tagline");

const typewriter = new Typewriter(introTagline, {
  loop: true,
  delay: 60,
  deleteSpeed: 20,
});

const initialDelay = 600;
const waitTime = 1000;
const typeDelay = 500;

typewriter
  .pauseFor(initialDelay)

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
