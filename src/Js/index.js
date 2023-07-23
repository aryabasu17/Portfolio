AOS.init();

var typed = new Typed(".typing", {
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
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwzjXtqvI0vbGuruMD22Q3YNM38MMGH3AK9f_9hRsYMgk17xYbszA7AYQ6u0qfXI4jkeQ/exec';
// const form = document.forms['submit-to-google-sheet'];
// const submit = document.getElementById("submit");
// const snackbar = document.getElementById("snackbar");
// const textarea = document.getElementById('textarea');

// // Function to toggle the notification
// function toggleNotification() {
//   snackbar.classList.toggle('hide');
// }

// // Function to show the notification
// function showNotification(message) {
//   const notificationText = snackbar.querySelector('.notification__body__first > p');
//   notificationText.textContent = message;
//   snackbar.classList.remove('hide');
//   setTimeout(() => {
//   snackbar.classList.add('hide');
//   }, 3000); // Adjust the timeout duration as needed (in milliseconds)
// }

// submit.addEventListener('click', e => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   formData.append('message', textarea.value);

//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then(() => {
//         showNotification("Message sent!")
//         form.reset();
//       })
//       .catch(error => console.error('Error!', error.message));
// });



const scriptURL = 'https://script.google.com/macros/s/AKfycbwzjXtqvI0vbGuruMD22Q3YNM38MMGH3AK9f_9hRsYMgk17xYbszA7AYQ6u0qfXI4jkeQ/exec';
const form = document.forms['submit-to-google-sheet'];
const submit = document.getElementById("submit");
const snackbar = document.getElementById("snackbar");
const textarea = document.getElementById('textarea');

// Function to toggle the notification
function toggleNotification() {
  snackbar.classList.toggle('hide');
}

submit.addEventListener('click', e => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append('message', textarea.value);

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      snackbar.classList.remove('hide');
      setTimeout(() => {
        snackbar.classList.add('hide');
      }, 3000); // Adjust the timeout duration as needed (in milliseconds)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});






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


var comingdate = new Date("Jul 30, 2023 00:00:00");

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





// newsletter


const scripturl = 'https://script.google.com/macros/s/AKfycbyvqQ5Vq6OyeBVIRa1vCXkd37XOP47-ViIm_N3XkrHYIQiVpjigc9Rxi4jV2y3qZRDBvw/exec';
const submit1 = document.getElementById("submit1");

submit1.addEventListener('click', e => {
    e.preventDefault();

    const emailInput = document.querySelector('#news-input input[name="email"]');

    if (emailInput) {
        const emailValue = emailInput.value;

        fetch(`${scripturl}?email=${encodeURIComponent(emailValue)}`, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    alert('Email submitted successfully!');
                    emailInput.value = ''; // Clear the input field
                } else {
                    alert('Error submitting email.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    } else {
        console.error('Email input element not found.');
    }
});