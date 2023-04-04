

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

// function visitPage() {
//   window.location = "https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing";
// };

const btnopen = document.querySelector("#resume");

btnopen.addEventListener("click", (event) => {
  window.open(
    "https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing",
    "_top"
  );
});

document.getElementById("news-input").addEventListener("click", submitform);

function submitform(e) {
  e.preventDefault();

  var email = getInputVal("Email");

  console.log(email);

  saveemail(email);
}

function saveemail(email) {
  let newcontactinfo = contactInfo.push();

  newcontactinfo.set({
    email: email,
  });
}
//function to get input val
function getInputVal(id) {
  return document.getElementById(id).value;
}

// const link = document.getElementById("nav-link");
// link.addEventListener("click", () => {
//     link.style.color = 'gray';
//     setTimeout(() => {
//         link.style.color = 'white';
//     }, 1000)
// },
// console.log(link),

// function gotoLink(link) {
//   location.href = 'https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing';
// };


