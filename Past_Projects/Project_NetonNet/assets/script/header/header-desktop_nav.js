let clicked = false
let selectNav = document.getElementsByClassName("navigation_option")


function cleanContainers(){
    let allContainers = document.getElementsByClassName('main-container')
    allContainers = [...allContainers]
           
    for (i=0;i<allContainers.length;i++){
        allContainers[i].classList.add('not-showing')
        selectNav[i].classList.remove("navigationSelect")
    }
    clicked=false
}

function showContainer(option){
    let container = document.getElementById(option);
    let i = 0
    console.log(option)

    if (option === "maincontainer") {
        i = 0
        console.log(1)
    } else if (option === "datorkomp") {
        i = 1
        console.log(2)
    } else if (option === "gaming") {
        i = 2
        console.log(3)
    } else if (option === "fritid") {
        i = 3
        console.log(4)
    } else if (option === "tv"){
        i = 4
        console.log(5)
    } else if (option === "ljud") {
        i = 5
        console.log(6)
    } else if (option === "mobil") {
        i = 6
        console.log(7)
    } else if (option === "vitvaror") {
        i = 7
        console.log(8)
    }
        
    if (container.classList.contains('not-showing')) {
        cleanContainers();
        container.classList.remove('not-showing');
        selectNav[i].classList.add("navigationSelect")
        clicked=true
    } else {
        cleanContainers();
    }
}


window.addEventListener("resize", function() {
    if (window.innerWidth < 1199) {
        cleanContainers()
    }
})

// Koden nedan kommer att modifieras när vi fixar hela koden

// document.getElementById('main').addEventListener('click',()=>{

//     if (clicked===true){
//          cleanContainers()
//     }
           
// })

