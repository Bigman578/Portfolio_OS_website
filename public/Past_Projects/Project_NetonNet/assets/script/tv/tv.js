let netonnet__product = window.netonnet_product

let card = 0;
function controller(x){
   card = card + x;
   slideshow(card);
}
slideshow(card);
function slideshow(num){
  let slides = document.getElementsByClassName("mini-slide-inner");
  if(num == slides.length){
    card = 0;
    num = 0;
  }
  if(num < 0){
    card = slides.length-1;
    num = slides.length-1;
  }
  for(let y of slides){
    y.style.display = "none";
  }
    slides[num].style.display = "block";
  }

function addToCart(index) {
    let localArray = JSON.parse(localStorage.getItem('localProds'))
    if(localArray[index].qty === 0){
        localArray[index].qty += 1
        localStorage.setItem('localProds', JSON.stringify(localArray))
        updateCartProds()
    } else {
        return
    }
}

function nextPage(index) {
    localStorage.setItem('productId', JSON.stringify(productss[index].image__alt))
    window.open('product-page.html', '_self')
}

function showProds(products){
for(i=0;i<products.length;i++){
    document.getElementById("main--content").innerHTML+= 
    
    `<div class="card product">
    <div class = "card-inner">
    <div class= "product-image">
    <img src="${products[i].image}" alt="${products[i].image__alt}"/>
    </div>
    <div class = "text-holder1" >
    <h4 onClick='nextPage(${i})'>${products[i].description__text}<h4>
    <h3 id="${[i]}-stars"></h3>  
    <div class="discription"><ul> 
        <li class="list">${products[i].description__bulet[0]}</li>
        <li class="list">${products[i].description__bulet[1]}</li>
        <li class="list">${products[i].description__bulet[2]}</li>
    </ul>
    </div>
       
        <h3>${products[i].price}</h3>
       <span></span>
       
        
        <div class="add-items">
        <button class="button" onClick='addToCart(${i})'>Lägg i kundvagn</button>
     
       </div>
       </div>
           </div>`
      for (j=0;j<5;j++){
        if (j < netonnet__product[i].rating__stars){
             document.getElementById(`${[i]}-stars`).innerHTML += `<i style="color:orange;" class="fa-solid fa-star"></i>`
        }
        else{
            document.getElementById(`${[i]}-stars`).innerHTML += `<i style="color:grey;" class="fa-solid fa-star"></i>`
        }
    } 
}


}
showProds(netonnet__product)
// check box function
let allFlagCheckButts = document.getElementsByClassName('check-but-lager') 
allFlagCheckButts = [...allFlagCheckButts]
for(i=0;i<allFlagCheckButts.length;i++){
    allFlagCheckButts[i].addEventListener('change',(e)=>{
        if(e.target.checked===true){
console.log(e.target.parentElement.textContent)
        }
    })
}
// drop down function
function sortAZ(){
    let val = document.getElementById('page-sort-dropdown').value
    document.getElementById('page-sort-dropdown').innerHTML=""
    if (val==="alphabetical"){
        netonnet__product.sort((a,b) => {
        if(a.brand > b.brand){
            return 1;
        }
        return 0;})
    }

    showProds()
    }
   

// drop down function end

// toggle hidden function
let hidden=true
function toggleHiddenText() {
  
    let hiddenText = document.getElementById("hiddenText");
  
    if (hidden===true) {
      
        hiddenText.style.display = "inline"; // Show the hidden text
    } else {
        hiddenText.style.display = "none"; // Hide the hidden text
    }
    hidden=!hidden
}

//toggle hidden finish
//code till filter category
let checkedCats=[]

    function valChecked(num, filt){

            if (checkedCats.length===0){

                    document.getElementById('main--content').innerHTML="";
            }

            
        
            let val=document.getElementById(`check-btn${num}`).value

        

            if (document.getElementById(`check-btn${num}`).checked){

                checkedCats.push(val)

                let seasonTv =netonnet__product.filter(tv => {
                    console.log(tv)
                    return filt==="brand"? tv.brand === val:filt==="cat"? tv.category === val:filt=="available"? tv.available==val:null;
                   
                    });
                    console.log(seasonTv);
                    
                    seasonTv.forEach((tv) => {
                       //card to filter using same card from showprod()
                        document.getElementById('main--content').innerHTML+=`
                        <div class="card ${val}"> 
                        <div class = "card-inner">
                        <div class= "product-image">
                        <img src="${tv.image}" alt="${tv.image__alt}"/>
                        </div>
                        <div class = "text-holder1" onClick='nextPage(${i})'>
                        <h4>${tv.description__text}<h4>
                        <h3 id="${[i]}-stars"></h3>  
                        <div class="discription">
                        <ul> 
                            <li class="list">${tv.description__bulet[0]}</li>
                            <li class="list">${tv.description__bulet[1]}</li>
                            <li class="list">${tv.description__bulet[2]}</li>
                        </ul>
                        </div>
                           
                            <h3>${tv.price}</h3>
                           <span></span>
                           
                            
                            <div class="add-items">
                           <button class="button" onClick='addToCart(${i})'>Lägg i kundvagn</button>
                         
                           </div>
                           </div>
                           </div>
                               </div>
                               `
                       
                           
                    });}


                
            else {
                let allCatProds = document.getElementsByClassName(val)
                allCatProds = [...allCatProds]
                allCatProds.forEach(prod=>prod.style.display='none')
               
                let catIndex; 
                checkedCats.forEach((cat,i)=>{
                    if (cat===val){
                        catIndex = i
                    }
                })

                checkedCats.splice(catIndex,1)
            }
        }



 // code to price range input

 const productsContainer = document.getElementById('main--content');
 const priceRange = document.getElementById('priceRange');
 const priceValue = document.getElementById('priceValue');
 
 // Display initial price value
 priceValue.textContent = `${priceRange.value} kr`;
 
 // Update price value when slider changes
 priceRange.addEventListener('change', function() {
   const selectedPrice = parseInt(this.value);
   priceValue.textContent = `${selectedPrice} kr`;
   console.log(selectedPrice)
   filterPriceProducts(selectedPrice);
 });
 
 // Function to filter and display products based on price
 function filterPriceProducts(selectedPrice) {
   
   productsContainer.innerHTML = ''; // Clear previous products
 
   let filteredRangeProds = netonnet__product.filter(product => {return product.price <= selectedPrice} )
   
 
   
   filteredRangeProds.sort(function(a, b){return a.price-b.price});
 
     showProds(filteredRangeProds)
   
 }
    // code to price range input ends
    
// sizerange code start

 const sizeContainer = document.getElementById('main--content');
 const sizeRange = document.getElementById('sizeRange');
 const sizeValue = document.getElementById('sizeValue');

// // Display initial price value
sizeValue.textContent = `${sizeRange.value}`;

 // Update price value when slider changes
sizeRange.addEventListener('change', function() {
   const selectedSize = parseInt(this.value);
   sizeValue.textContent = `${selectedSize}`;
  filterProducts(selectedSize);
 });

 // Function to filter and display products based on size
 function filterProducts(selectedSize) {
   productsContainer.innerHTML = ''; // Clear previous products

  let filteredRangeProds = netonnet__product.filter(product => {return product.size <= selectedSize} )
  

  
  filteredRangeProds.sort(function(a, b){return a.size-b.size});
  
   showProds(filteredRangeProds)
  
 }
 // sizerange code end
 
