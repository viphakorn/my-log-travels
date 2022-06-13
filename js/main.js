const slide = document.querySelector("#client .client .slide");
const card = document.querySelectorAll("#client .client .slide .card");
const next = document.querySelector("#client .client .slide #next")
const prev = document.querySelector("#client .client .slide #prev")

prev.onclick = () => {
    card[0].style.transform = `translateX(100%)`
    card[1].style.transform = `translateX(100%)`
    card[2].style.transform = `translateX(100%)`
}

next.onclick = () => {
    card[0].style.transform = "translateX(0%)"
    card[1].style.transform = "translateX(0%)"
    card[2].style.transform = "translateX(0%)"
}

