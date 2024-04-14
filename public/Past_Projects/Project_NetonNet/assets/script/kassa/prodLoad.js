let fullprice = document.getElementById('nummer')
let cartBtn = document.getElementById("cartBtn")
let cartContent = document.getElementById('cartContent')
let cartAmont = document.getElementById('cartAmount')
let products = window.netonnet_product

function deleteProd(index) {
    let localArray = JSON.parse(localStorage.getItem('localProds'))
    localArray[index].qty = 0
    localStorage.setItem('localProds', JSON.stringify(localArray))
    CartProds()
}

function CartProds() {
    let localproducts = JSON.parse(localStorage.getItem('localProds'))
    let quantity = 0
    let fullPrice = 0
    let cartContentHTML = ''
    localproducts.forEach((prod, index) => {
    let prodname = prod.description__text;
    let prodpic = prod.image
    let prodid = prod.image__alt;
    let prodqty = prod.qty;
    let prodPrice = prod.price
    quantity += prodqty;
    if (prodqty >= 1) {
        fullPrice += prodPrice;
        cartContentHTML += `
        <div class="prod">
        <img src="${prodpic}" alt="item">
        <div class="itemcolumn">
            <h2 class="name">${prodname}</h2>
            <p>Art Nr: ${prodid}</p>
            <p>Quantity: ${prodqty}</p>
        </div>
        <div class="remove">
            <i class="fa-solid fa-trash" onClick='deleteProd(${index})'></i>
        </div>
    </div>
        `} 
    });
    fullprice.innerHTML = fullPrice + 'kr'
    if (cartContentHTML === '') {
        cartContent.innerHTML = `<h2 id="empty">Kundvagnen är tom</h2>`;
    } else {
        cartContent.innerHTML = cartContentHTML;
        cartAmont.innerHTML = quantity
    }

    // Adjust cartContent styles based on the presence of items
    if (localproducts.some(prod => prod.qty > 0)) {
        cartContent.style.justifyContent = 'start';
        cartContent.style.alignItems = 'start';
        cartAmont.style.display = 'flex'
    } else {
        cartContent.style.justifyContent = 'center';
        cartContent.style.alignItems = 'center';
        cartAmont.style.display = 'none'
    }
}

CartProds()