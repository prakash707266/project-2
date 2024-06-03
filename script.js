// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactUsButton = document.getElementById('contactUsButton');
    const contactFormModal = document.getElementById('contactFormModal');
    const closeButton = document.querySelector('.close-button');

    contactUsButton.addEventListener('click', () => {
        contactFormModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        contactFormModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === contactFormModal) {
            contactFormModal.style.display = 'none';
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        contactFormModal.style.display = 'none';
    });
});

// Slider Functionality
const slider = document.getElementById('servicesSlider');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.service-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Automatically change slide every 3 seconds

// Image Change Functionality
function changeImage(imageSrc, element) {
    document.getElementById('mainImageToChange').src = imageSrc;
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}
