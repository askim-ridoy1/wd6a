// Particles Background
function initParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = opacity;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Random color
        const colors = ['#00f0ff', '#ff00e4', '#00ff9d'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        container.appendChild(particle);
    }
}

// Gallery Functionality
function initGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    let currentSlide = 0;
    
    // Create thumbnails
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        if (index === 0) thumbnail.classList.add('active');
        
        const img = slide.querySelector('img').cloneNode();
        thumbnail.appendChild(img);
        
        thumbnail.addEventListener('click', () => {
            goToSlide(index);
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Navigation functions
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        showSlide(index);
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const gallery = document.querySelector('.gallery-container');
    gallery.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    gallery.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-value');
   