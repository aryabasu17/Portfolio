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
