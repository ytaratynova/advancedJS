//         2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы"
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв
// из localstorage и со страницы.
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из
// localstorage, так и со страницы.

import { getReviews, getProducts, removeReview } from "./storage.js"
const contentEl = document.querySelector('.content')
const btnMain = document.querySelector('.mainRedirect')
btnMain.addEventListener('click', () => {
    window.location.href = "index.html"
})



const products = getProducts()
console.log(products)
products.forEach(element => {
    console.log(element)
    const productBlockEl = document.createElement("div")
    productBlockEl.classList.add("product_block")
    const productNameEl = document.createElement("h2")
    productNameEl.textContent = element
    productBlockEl.append(productNameEl)

    // создаем конпку показать/скрыть отзыв
    const btnShowHideEl = document.createElement("button")
    btnShowHideEl.textContent = "Показать отзывы"
    productBlockEl.append(btnShowHideEl)
    // создаем блок для отзывов
    const reviews = getReviews(element)
    const reviewsBlockEl = document.createElement("div")
    reviewsBlockEl.classList.add("reviews_visibility")
    reviewsBlockEl.classList.add("false_visibility")
    // обрабатываем событие нажатие на кнопку, меняем надпить у кнопки и класс у отзывов
    btnShowHideEl.addEventListener('click', () => {
        if (reviewsBlockEl.classList.contains("false_visibility")) {
            btnShowHideEl.innerText = "Скрыть отзывы"
            reviewsBlockEl.classList.remove("false_visibility")
        } else {
            btnShowHideEl.innerText = "Показать отзывы"
            reviewsBlockEl.classList.add("false_visibility")
        }
    })


    reviews.forEach(review => {
        const reviewEl = document.createElement("p")
        reviewEl.textContent = review
        reviewsBlockEl.append(reviewEl)
        // добавляем кнопку "удалить" к отзыву
        const btnDeleteEl = document.createElement("button")
        btnDeleteEl.textContent = "удалить"
        reviewEl.append(btnDeleteEl)
        btnDeleteEl.addEventListener('click', () => {
            reviewsBlockEl.removeChild(reviewEl)
            removeReview(element, review)
        })
    })
    productBlockEl.append(reviewsBlockEl)
    contentEl.append(productBlockEl)
});









