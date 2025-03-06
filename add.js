const slides = [
    "./assets/iphone 15.png",
    "./assets2/pngimg.com - iphone16_PNG13.png",
    "./assets2/pngimg.com - iphone16_PNG24.png",
    "./assets2/pngimg.com - iphone16_PNG35.png",
    "./assets2/pngimg.com - iphone16_PNG35.png"
]

let currentIndex = 0;
const slideImage = document.querySelector(".slide__img");
const dots = document.querySelectorAll(".indicator");


function updateSlide(index) {
    slideImage.src = slides[index];
    dots.forEach(dot => {
        dot.classList.remove("active")
        dots[index].classList.add("active")
    })

}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}

let slideInterval = setInterval(autoSlide, 3000);