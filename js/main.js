// Main JavaScript - Event Listeners and Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Cart Button Event
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', toggleCart);

    // Close Cart Button
    const closeCart = document.getElementById('closeCart');
    closeCart.addEventListener('click', toggleCart);

    // Continue Shopping Button
    const continueShopping = document.getElementById('continueShopping');
    continueShopping.addEventListener('click', toggleCart);

    // Checkout Button
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', checkout);

    // Close modal when clicking outside
    const modal = document.getElementById('cartModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            toggleCart();
        }
    });

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter products
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Sort Select
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(this.value);
        }, 300);
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Message envoyé avec succès! Nous vous répondrons bientôt.', 'success');
        this.reset();
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Active Navigation on Scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Special case for home
        if (window.scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#') {
                    link.classList.add('active');
                }
            });
        }
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });

    // Welcome Message
    console.log('%c🛒 MIHAERE SHOP - Site E-commerce', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%cBienvenue sur notre boutique en ligne!', 'font-size: 14px; color: #8b5cf6;');
    
    // Show welcome toast
    setTimeout(() => {
        showToast('🎉 Bienvenue sur MIHAERE SHOP! Explorez nos produits.', 'success');
    }, 1000);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'C' to toggle cart
    if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            toggleCart();
        }
    }
    
    // Press 'Escape' to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('cartModal');
        if (modal.classList.contains('active')) {
            toggleCart();
        }
    }
});

// Update copyright year
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').innerHTML = `&copy; ${currentYear} MIHAERE SHOP. Tous droits réservés.`;
