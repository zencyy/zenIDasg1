/* slideable carousell function for Shop page */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousell-image');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousell-images');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatic slide transition every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);