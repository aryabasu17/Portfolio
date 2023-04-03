AOS.init()

const typed = new Typed(' .typing', {
  strings: ['Developer', 'Writer', 'AI Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

const valueNumbers = document.querySelectorAll('.exp-number')
const interval = 2000

valueNumbers.forEach((valueNumber) => {
  let startValue = 0
  const endValue = parseInt(valueNumber.getAttribute('data-val'))
  const duration = Math.floor(interval / endValue)
  const counter = setInterval(() => {
    startValue += 1
    valueNumber.textContent = startValue
    if (startValue == endValue) {
      clearInterval(counter)
    }
  }, duration)
})

// function visitPage() {
//     window.location =
//       "https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing";
// };

// const link = document.getElementById("nav-link");
// link.addEventListener("click", () => {
//     link.style.color = 'gray';
//     setTimeout(() => {
//         link.style.color = 'white';
//     }, 1000)
// },
// console.log(link),

// function visitPage() {
//     window.location = "https://stylnode.com/newsletter";
// },

function gotoLink (link) {
  location.href =
    'https://drive.google.com/file/d/1j5zVdicwCTsxXpvP3-EgRDSHGY7IvbJM/view?usp=sharing'
}
