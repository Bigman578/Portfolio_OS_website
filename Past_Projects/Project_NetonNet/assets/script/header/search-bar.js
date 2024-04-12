let input_bar = document.getElementById('inputbar');
let show = document.getElementById('searched-products');

let productss = window.netonnet_product;

function productSearch() {
    let search = input_bar.value.trim().toLowerCase(); 
    show.innerHTML = ''; 
    console.log(productss)
    
    if (search === '') {
        show.style.display = 'none'; 
        return;
    }
    
    let found = false; 
    
    for (let i = 0; i < productss.length; i++) {
        let prodname = productss[i].description__text.toLowerCase();
        if (prodname.includes(search)) { 
            found = true;
            show.style.display = 'flex';
            let productItem = document.createElement('p');
            productItem.textContent = productss[i].description__text;
            productItem.addEventListener('click', function() {
                localStorage.setItem('productId', JSON.stringify(productss[i].image__alt))
                window.open('product-page.html', '_self')
            })
            show.appendChild(productItem); 
        }
    }
    
    if (!found) {
        show.style.display = 'none'; 
    }
}