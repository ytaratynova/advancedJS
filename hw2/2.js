"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const content = document.querySelector('.content')

initialData.forEach(element => {

  const product = document.createElement("div")
  product.classList.add('product')
  const productId = document.createElement('p')
  productId.textContent = element.id
  const productTitle = document.createElement('h3')
  productTitle.textContent = element.product

  const reviews = document.createElement("div")
  reviews.classList.add('reviews')
  element.reviews.forEach(review => {
    const reviewId = document.createElement('p')
    reviewId.classList.add('review-id')
    reviewId.textContent = review.id
    const reviewText = document.createElement('p')
    reviewText.textContent = review.text

    const reviewItem = document.createElement('div')
    reviewItem.classList.add('review-item')
    reviewItem.append(reviewId, reviewText)
    reviews.append(reviewItem)
  })
  const reviewForm = document.createElement('form')
  const reviewInput = document.createElement('input')
  reviewInput.setAttribute('type', 'text')
  reviewInput.setAttribute('placeholder', 'Ваш отзыв')
  const reviewButton = document.createElement('button')
  reviewButton.setAttribute('type', 'submit')
  reviewButton.innerText = "Отправить"
  reviewButton.classList.add('review-button')
  const errorEl = document.createElement('p')
  errorEl.classList.add('error')
  reviewButton.addEventListener('click', (e) => {
    e.preventDefault()
    try {
      if (reviewInput.value.length < 50 || reviewInput.value.length > 500) {
        reviewInput.value = ''
        throw new Error('Отзыв должен быть не менее 50 символов и не более 500')
      }

      const reviewId = document.createElement('p')
      reviewId.classList.add('review-id')
      reviewId.textContent = uid()
      const reviewText = document.createElement('p')
      reviewText.textContent = reviewInput.value

      const reviewItem = document.createElement('div')
      reviewItem.classList.add('review-item')
      reviewItem.append(reviewId, reviewText)
      reviews.append(reviewItem)

      reviewInput.value = ''
      errorEl.textContent = ''

    } catch (error) {
      errorEl.textContent = error.message
      reviewForm.append(errorEl)
    }
  })

  reviewForm.append(reviewInput, reviewButton)

  product.append(productId, productTitle, reviews, reviewForm)
  content.append(product)

})
