let productName = document.getElementById('productName')
let productRating = document.getElementById('ranking')
let productNr = document.getElementById('productArt')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productStar = document.getElementById('star')
let productDots = document.getElementById('productDots')
let insertToCart = document.getElementById('addToCart')
let allProducts = window.netonnet_product

function findIndex(array, index) {
    let foundProd = array.map(element => element.image__alt)
    return foundProd.indexOf(index)
}

function addToCart(index) {
    let localArray = JSON.parse(localStorage.getItem('localProds'))
    if(localArray[index].qty === 0){
        localArray[index].qty += 1
        console.log(localArray[index])
        localStorage.setItem('localProds', JSON.stringify(localArray))
        updateCartProds()
    } else {
        return
    }
}

function productLoad() {
    let productID = JSON.parse(localStorage.getItem('productId'))
    let index = findIndex(allProducts, productID)

    console.log(index)

    productName.innerHTML = allProducts[index].description__text
    productRating.innerHTML = allProducts[index].rating__stars
    productNr.innerHTML = allProducts[index].image__alt
    productImage.src = allProducts[index].image
    productPrice.innerHTML = allProducts[index].price
    productDots.innerHTML = ''
    allProducts[index].description__bulet.forEach(element => {
        productDots.innerHTML += `<li>${element}</li>`
    })
    productStar.innerHTML = ''
    for (let i = 0; i < 5; i++) {
        if(i < allProducts[index].rating__stars) {
            productStar.innerHTML += '&#9733;'
        } else {
            productStar.innerHTML += '&#9734;'
        }
    }

    insertToCart.addEventListener('click', function() {
        console.log('working')
        addToCart(index)
    })
}

productLoad()