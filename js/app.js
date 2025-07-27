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
    const header = document.querySelector('.header');
    
    // Get the computed style of the root element
    const rootStyles = getComputedStyle(document.documentElement);
    
    // Get the CSS variables
    const stickyBg = rootStyles.getPropertyValue('--header-bg').trim();

    // if (window.scrollY > 50) {
    //     header.style.background = stickyBg; 
    // } else {
    //     header.style.background = 'none'; 
    // }
});

// Theme Toggle Functionality

function setTheme(theme) {
    document.documentElement.className = theme; 
    localStorage.setItem('theme', theme); 
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'; 
    const toggleIcon = document.querySelector('#theme-icon');
    setTheme(newTheme);
    if (newTheme === 'light') {
        toggleIcon.classList.remove('fa-sun'); // Remove sun icon
        toggleIcon.classList.add('fa-moon'); // Add moon icon
    } else {
        toggleIcon.classList.remove('fa-moon'); // Remove moon icon
        toggleIcon.classList.add('fa-sun'); // Add sun icon
    }
    bgchange()
}

// Event listener for theme toggle button
document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); 

    const themeToggleButton = document.querySelector('#theme-toggle'); 
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme); 
    }
    
    // Section 2
    
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

    // Auto slide every 30 seconds
    setInterval(nextSlide, 30000);
});

function bgchange(){
    const header = document.querySelector('.header');
    
    // Get the computed style of the root element
    const rootStyles = getComputedStyle(document.documentElement);
    
    // Get the CSS variables
    const stickyBg = rootStyles.getPropertyValue('--header-bg').trim();

    header.style.background = stickyBg; 
    
}