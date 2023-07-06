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

// function visitPage() {
//   window.location = "https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing";
// };

const btnopen = document.querySelector("#resume");

btnopen.addEventListener("click", (event) => {
  window.open(
    "https://drive.google.com/file/d/1HGRxQWf3aBovll4nbjfbaL0P7jlx4Xsl/view?usp=sharing",
    "_top"
  );
});



// const btn1open = document.querySelector("#more");

// btnopen.addEventListener("click", (event) => {
//   window.open(
//     "https://www.linkedin.com/in/aryabasu21/",
//     "_top"
//   );
// });



// document.getElementById("news-input").addEventListener("click", submitform);

// function submitform(e) {
//   e.preventDefault();

//   var email = getInputVal("Email");

//   console.log(email);

//   saveemail(email);
// }

// function saveemail(email) {
//   let newcontactinfo = contactInfo.push();

//   newcontactinfo.set({
//     email: email,
//   });
// }
// //function to get input val
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

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

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});


var comingdate = new Date("Jul 12, 2023 00:00:00");

var d = document.getElementById("d");
var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");

var x = setInterval(function () {
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var days = Math.floor(des / (1000 * 60 * 60 * 24));
  var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((des % (1000 * 60)) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  if (des <= 0) clearInterval(x);
}, 1000);

function getTrueNumber(x) {
  if (x < 10) return "0" + x;
  else return x;
}




