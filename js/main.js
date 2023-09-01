
const slider = document.querySelector('#client .client .slide')
const slides = document.querySelectorAll("#client .client .slide .card")
const nextBtn = document.querySelector("#client .client .slide #next")
const prevBtn = document.querySelector("#client .client .slide #prev")

let currentSlide = 0
let maxSlide = slides.length - 2
// let slideWidth = slides[0].getBoundingClientRect().width


nextBtn.addEventListener("click", () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    slides.forEach((slide,) => {
  slide.style.transform = `translateX(${100 * -currentSlide}%)`
    })
})
prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--
  }

    slides.forEach((slide) => {
  slide.style.transform = `translateX(${100 * currentSlide}%)`

  })
})

