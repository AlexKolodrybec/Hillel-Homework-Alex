let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
    createDots();
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlide = slides.length - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });

    document.querySelector('.prev').style.display = currentSlide === 0 ? 'none' : 'block';
    document.querySelector('.next').style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

function createDots() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');

    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    showSlide(currentSlide);
}
