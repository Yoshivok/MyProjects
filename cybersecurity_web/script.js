// Menu toggle functionality
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
        menuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // In a real application, you would send this data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 16, 0.95)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(5, 5, 16, 0.9)';
        navbar.style.padding = '15px 0';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.tool-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const itemsPerView = getItemsPerView();
    
    function getItemsPerView() {
        if (window.innerWidth >= 1100) return 4;
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 576) return 2;
        return 1;
    }
    
    function updateCarousel() {
        const itemWidth = 100 / itemsPerView;
        const translateX = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        const maxIndex = Math.ceil(items.length / itemsPerView) - 1;
        currentIndex = (currentIndex >= maxIndex) ? 0 : currentIndex + 1;
        updateCarousel();
    }
    
    function prevSlide() {
        const maxIndex = Math.ceil(items.length / itemsPerView) - 1;
        currentIndex = (currentIndex <= 0) ? maxIndex : currentIndex - 1;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});
