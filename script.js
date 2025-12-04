// script.js - Complete Interactive Features for ApoConsult Solutions

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('ApoConsult Solutions website loaded successfully!');
    
    // Initialize all features
    initSmoothScrolling();
    initContactForm();
    initBackToTop();
    initScrollAnimations();
    initCurrentYear();
    initImageLazyLoading();
    initServiceCardEffects();
});

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate header height for offset
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight - 20,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link (optional)
                    updateActiveNavLink(href);
                }
            }
        });
    });
}

function updateActiveNavLink(activeHref) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// ===== CONTACT FORM HANDLING =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value.trim()
            };
            
            // Validate form
            if (validate
