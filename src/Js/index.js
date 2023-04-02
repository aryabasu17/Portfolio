AOS.init();

var typed = new Typed(" .typing", {
  strings: ["Developer", "Writer", "AI Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 2000;

valueNumbers.forEach((valueNumber) => {
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueNumber.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
