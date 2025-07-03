const slides = document.querySelectorAll(".slider .card")
const dots = document.querySelector(".slider .dots")
const left = document.querySelector(".slider .left")
const right = document.querySelector(".slider .right")
let activeDote = 0


DotsByScreen();
window.addEventListener("resize", DotsByScreen);
function DotsByScreen() {
dots.innerHTML = "";
    if (window.matchMedia("(max-width: 992px)").matches) {
        for (let i = 0; i < slides.length; i++) {
            dots.innerHTML += `<span class="dote ${(i == 0) ? "active" : ""} " onclick="sliderMovment(${i})" id="dote${i}"></span>`
        }
    }
    else {
        for (let i = 0; i < slides.length - 2; i++) {
            dots.innerHTML += `<span class="dote ${(i == 0) ? "active" : ""} " onclick="sliderMovment(${i})" id="dote${i}"></span>`
        }
    }
}

const sliderMovment = (index) => {
    const dote = document.querySelector(`.slider #dote${index}`)
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    for (let i = 0; i < dotes.length; i++) {
        dotes[i].classList.remove("active")
    }
    dote.classList.add("active")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(calc(-${index * 100}% - ${index * 25}px))`
    }
    activeDote = index
}

left.addEventListener("click", () => {
    /*     const activeDote = document.querySelector(".slider .active")
        const dotes = document.querySelectorAll(`.slider .dots .dote`)
        const doteId = activeDote.id
        const index = (doteId[doteId.length-1] == dotes.length-1) ? 0 : parseInt(doteId[doteId.length-1]) + 1
        const nextDoteId = "dote" + index */
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    const index = (activeDote == dotes.length - 1) ? 0 : activeDote + 1
    const nextDoteId = "dote" + index
    const nextDote = document.querySelector(`.slider #${nextDoteId}`)
    nextDote.click()
})
right.addEventListener("click", () => {
    /*     const activeDote = document.querySelector(".slider .active")
        const dotes = document.querySelectorAll(`.slider .dots .dote`)
        const doteId = activeDote.id
        const index = (doteId[doteId.length-1] == 0) ? dotes.length-1 : parseInt(doteId[doteId.length-1])-1
        const nextDoteId = "dote" + index */
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    const index = (activeDote == 0) ? dotes.length - 1 : activeDote - 1
    const nextDoteId = "dote" + index
    const nextDote = document.querySelector(`.slider #${nextDoteId}`)
    nextDote.click()
})

/* ----------------------------rateSection --------------------------------*/
const starsContainer = document.querySelector(".rateSection .stars")
const rate = document.querySelector(".rateSection .rate")


for (let i = 0; i < 5; i++) {
    starsContainer.innerHTML += `<i class="fa-regular fa-star" onclick="rating(${i})" id="star${i}"></i>`
}

const rating = (index) => {
    const star = document.querySelector(`.rateSection .stars #star${index}`)
    const stars = document.querySelectorAll(`.rateSection .stars .fa-star`)
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("activeStar")
    }
    for (let i = 0; i <= index; i++) {
        stars[i].classList.add("activeStar")
    }
    switch (index) {
        case 0:
            rate.textContent = "Bad";
            break;
        case 1:
            rate.textContent = "Not bad";
            break;
        case 2:
            rate.textContent = "Good";
            break;
        case 3:
            rate.textContent = "Very good";
            break;
        case 4:
            rate.textContent = "Excellent";
            break;
        default:
            rateText.textContent = "";
    }
}