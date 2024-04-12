const slider = document.querySelector(".mySlides");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.querySelectorAll(".Slider_Dots");
const slideWidth = document.querySelector(".mySlider").scrollWidth;
let SlideIndex = 0

function prevSlide() {
    SlideIndex--
    if (SlideIndex < 0 ) {
        SlideIndex = 0
    }
    console.log(SlideIndex)
    showSlide()
    showDots()
}

dots[0].classList.add("active")

function nextSlide() {
    SlideIndex++
    if (SlideIndex >= slider.children.length) {
        SlideIndex = slider.children.length - 1;
    }
    console.log(SlideIndex)
    showSlide()
    showDots()
}

function showSlide() {
    const translateX = -SlideIndex * slideWidth;
    console.log(translateX)
    slider.style.transform = `translateX(${translateX}px)`;
}

function showDots() {
    
    for (let i = 0; i < dots.length; i++) {
        if (i === SlideIndex) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}


prev.addEventListener("click", prevSlide)
next.addEventListener("click", nextSlide)

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        SlideIndex = index;
        showSlide();
        showDots();
    });
});