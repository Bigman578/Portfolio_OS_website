let fullNavigation = document.getElementById("fullNavigation")
let navigationOverlay = document.getElementById("mobile-navigationOverlay")
let mobileNavClose = document.getElementById("mobile-navigationClose")
let mobileNavOpen = document.getElementById("mobile-navigationOpen")
let navigationFunction = document.getElementsByClassName("mobile-navigation__options")

function navigationOpen() {
    navigationOverlay.style.display = "block";
    fullNavigation.style.display = "block";
    navigationOverlay.style.animation = "opacityChange1 0.25s";
    fullNavigation.style.animation = "mobileNavMove2 0.25s";
    setTimeout(function() {

        navigationOverlay.style.opacity = "1";
        fullNavigation.style.transform = "translateX(0)";
    }, 250)


}

function navigationClose() {
    navigationOverlay.style.animation = "opacityChange2 0.25s";
    fullNavigation.style.animation = "mobileNavMove1 0.25s";

    setTimeout(function() {
        fullNavigation.style.transform = "translateX(-100%)"
    }, 1)

    setTimeout(function() {
        
        fullNavigation.style.display = "none"; 
        navigationOverlay.style.display = "none";
    }, 249)
    //setTimeout(navigationOverlay.style.display = "none", 1000)
    //setTimeout(function() {navigationOverlay.style.display = "none"}, 250)
    
}


mobileNavOpen.addEventListener("click", navigationOpen);
mobileNavClose.addEventListener("click", navigationClose)