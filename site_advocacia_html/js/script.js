// Cases data
const cases = [
    {
        id: 1,
        title: 'Reestruturação Societária Estratégica',
        description: 'Assessoria completa na reestruturação societária de um grupo empresarial, visando otimização fiscal e sucessória, resultando em economia significativa e segurança jurídica.',
        icon: '⚖️'
    },
    {
        id: 2,
        title: 'Defesa em Litígio Complexo',
        description: 'Atuação vitoriosa em litígio de alta complexidade envolvendo disputa contratual de grande vulto, protegendo os interesses de nosso cliente e evitando perdas substanciais.',
        icon: '🛡️'
    },
    {
        id: 3,
        title: 'Fusão e Aquisição (M&A) Bem-Sucedida',
        description: 'Condução de processo de fusão e aquisição, desde a due diligence até a integração pós-aquisição, garantindo conformidade legal e sinergia operacional para ambas as partes.',
        icon: '🤝'
    },
    {
        id: 4,
        title: 'Consultoria em Compliance e Governança',
        description: 'Implementação de programa de compliance robusto e estrutura de governança corporativa para empresa do setor financeiro, mitigando riscos regulatórios e fortalecendo a reputação da companhia.',
        icon: '📋'
    }
];

// Global variables
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const carouselContent = document.getElementById('carouselContent');
const carouselDots = document.getElementById('carouselDots');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const progressBar = document.getElementById('progressBar');
const currentCase = document.getElementById('currentCase');
const totalCases = document.getElementById('totalCases');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initCarousel();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
});

// Mobile menu functionality
function initMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-menu .btn');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// Carousel functionality
function initCarousel() {
    if (!carouselContent || !carouselDots) return;

    // Create carousel slides
    createCarouselSlides();
    
    // Create dots
    createCarouselDots();
    
    // Show first slide
    showSlide(0);
    
    // Update total cases
    if (totalCases) {
        totalCases.textContent = `${cases.length} Cases`;
    }
    
    // Event listeners
    if (carouselPrev) {
        carouselPrev.addEventListener('click', function() {
            prevSlide();
        });
    }
    
    if (carouselNext) {
        carouselNext.addEventListener('click', function() {
            nextSlide();
        });
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause auto-play on hover
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
        carouselWrapper.addEventListener('mouseleave', startAutoPlay);
    }
}

function createCarouselSlides() {
    carouselContent.innerHTML = '';
    
    cases.forEach((caseItem, index) => {
        const slide = document.createElement('div');
        slide.className = `case-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="case-icon">${caseItem.icon}</div>
            <h3 class="case-title">${caseItem.title}</h3>
            <p class="case-description">${caseItem.description}</p>
            <button class="btn btn-secondary">
                Saiba Mais
                <i class="fas fa-external-link-alt"></i>
            </button>
        `;
        carouselContent.appendChild(slide);
    });
}

function createCarouselDots() {
    carouselDots.innerHTML = '';
    
    cases.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
}

function showSlide(index) {
    // Hide all slides
    const slides = document.querySelectorAll('.case-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    // Update progress bar
    if (progressBar) {
        const progress = ((index + 1) / cases.length) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressBar.style.width = `${progress}%`;
    }
    
    // Update current case number
    if (currentCase) {
        currentCase.textContent = `Case ${index + 1}`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % cases.length;
    showSlide(currentSlide);
    stopAutoPlay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + cases.length) % cases.length;
    showSlide(currentSlide);
    stopAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    stopAutoPlay();
}

function startAutoPlay() {
    if (!isAutoPlaying) return;
    
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % cases.length;
        showSlide(currentSlide);
    }, 5000);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        showFormSuccess();
        
        // Reset form after 3 seconds
        setTimeout(() => {
            hideFormSuccess();
            contactForm.reset();
        }, 3000);
    });
}

function showFormSuccess() {
    if (formSuccess && contactForm) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
    }
}

function hideFormSuccess() {
    if (formSuccess && contactForm) {
        formSuccess.style.display = 'none';
        contactForm.style.display = 'flex';
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.team-card, .service-card, .principle-item, .contact-item');
    animateElements.forEach(el => observer.observe(el));
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        }
    }
}, 250);

window.addEventListener('resize', handleResize);

// Keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

const carouselWrapper = document.querySelector('.carousel-wrapper');
if (carouselWrapper) {
    carouselWrapper.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselWrapper.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left - next slide
        } else {
            prevSlide(); // Swipe right - previous slide
        }
    }
}

// Preload images
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
preloadImages();

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Failed to load image:', e.target.src);
    }
}, true);

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

