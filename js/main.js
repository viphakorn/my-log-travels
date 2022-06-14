
const track = document.querySelector('#client .client .slide')
const cards = document.querySelectorAll("#client .client .slide .card")
const next = document.querySelector("#client .client .slide #next")
const prev = document.querySelector("#client .client .slide #prev")

let cardWidth = cards[0].getBoundingClientRect().width

// const setTransform = (card, i) => {
//     card.style.transform = `translateX(${cardWidth * i}px)`
// }
// cards.forEach(setTransform)


next.onclick = () => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    // console.log(amoutToMove);
    cards.forEach((card) => {
        card.style.transform = `translateX(-${cardWidth}px)`
    });
}
prev.onclick = () => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    // console.log(amoutToMove);
    cards.forEach((card) => {
        card.style.transform = `translateX(${cardWidth}px)`
    });
}

