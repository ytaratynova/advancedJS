const addReviewBtnEl = document.querySelector('.addReview')
const showReviewBtnEl = document.querySelector('.showReview')

addReviewBtnEl.addEventListener('click', () => {
    window.location.href = 'addreview.html'
})
showReviewBtnEl.addEventListener('click', () => {
    window.location.href = 'viewreview.html'
})