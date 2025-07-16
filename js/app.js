// Hero Section

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-content')) {
        navMenu.classList.remove('active');
    }
});

// Header transparency on scroll
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.background = 'none';
    }
});

// Section 2

document.addEventListener('DOMContentLoaded', () => {


    
    const slides = document.querySelectorAll('.mfc-slide');
    const dots = document.querySelectorAll('.mfc-dot');
    const prevBtn = document.querySelector('.mfc-prev');
    const nextBtn = document.querySelector('.mfc-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 30000);
});


