function getProducts() {
    const productNames = [];

    for (let i = 0; i < localStorage.length; i++) {
        productNames.push(localStorage.key(i));
        console.log(productNames);
    }
    return productNames;
}


function getReviews(product) {
    const reviews = localStorage.getItem(product)
    if (!reviews) {
        return []
    }
    return JSON.parse(reviews)
}

function addReview(product, review) {
    const reviews = getReviews(product)

    reviews.push(review)
    localStorage.setItem(product, JSON.stringify(reviews))

}

function removeReview(product, review) {
    const reviews = getReviews(product)

    reviews.splice(reviews.indexOf(review), 1)
    localStorage.setItem(product, JSON.stringify(reviews))
    if (reviews.length === 0) {
        localStorage.removeItem(product)
        location.reload()
    }
}

export { addReview, getReviews, getProducts, removeReview }