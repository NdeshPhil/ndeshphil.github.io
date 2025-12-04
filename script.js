// script.js - Interactive features for ApoConsult Solutions

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('#contactModal form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || 'Not provided';
            const email = formData.get('email') || 'Not provided';
            const message = formData.get('message') || 'Not provided';
            
            // In a real implementation, you would send this to a server
            // For now, we'll just show an alert and log to console
            console.log('Contact Form Submission:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
            
            // Close modal
            toggleModal(false);
        });
    }

    // Add animation to sponsor logos on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe sponsor images
    document.querySelectorAll('.sponsors-container img').forEach(img => {
        observer.observe(img);
    });

    // Add hover effect to service items
    document.querySelectorAll('section ul li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f9ff';
            this.style.transition = 'background-color 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});

// Modal toggle function (already in your HTML, but keeping it here too)
function toggleModal(show) {
    const modal = document.getElementById('contactModal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add current year to footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
