import { addReview } from "./storage.js"

const btnMain = document.querySelector('.mainRedirect')
const nameEl = document.querySelector('.name')
const reviewEl = document.querySelector('.review')
const addBtnEl = document.querySelector('.add')

btnMain.addEventListener('click', () => {
    window.location.href = "index.html"
})


addBtnEl.addEventListener('click', () => {
    const nameValue = nameEl.value
    const reviewValue = reviewEl.value
    if (nameValue && reviewValue) {
        addReview(nameValue, reviewValue)
        nameEl.value = ""
        reviewEl.value = ""
    }
    else {
        alert('Все поля должны быть заполнены');
    }
})