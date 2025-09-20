// Main JavaScript for Task 2 - TechSolutions
// Built with Nunjucks + Vite

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Active navigation highlighting
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        function updateActiveNav() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                
                if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Initial call
    }

    // Contact form handling
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '⏳ Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                showNotification('✅ Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                form.reset();
                
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Newsletter form handling
    function initNewsletterForm() {
        const newsletterForms = document.querySelectorAll('.newsletter-form');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = form.querySelector('input[type="email"]').value;
                const submitBtn = form.querySelector('button[type="submit"]');
                
                if (!email) {
                    showNotification('❌ Please enter a valid email address.', 'error');
                    return;
                }

                // Show loading state
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Subscribing...';
                submitBtn.disabled = true;

                // Simulate subscription
                setTimeout(() => {
                    showNotification('🎉 Successfully subscribed to our newsletter!', 'success');
                    form.reset();
                    
                    // Restore button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification-toast');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification-toast alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border: none;
        `;
        notification.innerHTML = `
            <div class="d-flex align-items-center">
                <span class="flex-grow-1">${message}</span>
                <button type="button" class="btn-close ms-2" aria-label="Close"></button>
            </div>
        `;

        // Add to DOM
        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.btn-close');
        closeBtn.addEventListener('click', () => notification.remove());

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Navbar scroll effect
    function initNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.backgroundColor = 'rgba(0, 86, 179, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.backgroundColor = '';
                navbar.style.backdropFilter = '';
            }
        }

        window.addEventListener('scroll', updateNavbar);
        updateNavbar(); // Initial call
    }

    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-card, .contact-item');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Portfolio filter functionality (if needed)
    function initPortfolioFilter() {
        // This can be expanded if you add filter functionality
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        
        portfolioCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.classList.contains('btn')) {
                    e.preventDefault();
                    showNotification('🔧 Portfolio details coming soon!', 'info');
                }
            });
        });
    }

    // Initialize all functionality
    function init() {
        console.log('🚀 TechSolutions - Task 2 Initialized');
        console.log('📋 Built with Nunjucks + Vite');
        
        initSmoothScrolling();
        initActiveNavigation();
        initContactForm();
        initNewsletterForm();
        initNavbarScrollEffect();
        initScrollAnimations();
        initPortfolioFilter();
        
        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                animation: slideInUp 0.8s ease-out forwards;
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Log project info
        console.log('✅ All features initialized successfully');
    }

    // Start the application
    init();

    // Global utilities
    window.TechSolutions = {
        showNotification,
        version: '2.0.0',
        techStack: 'Nunjucks + Vite',
        task: 'Task 2 - Templating Engine + Bundler Implementation'
    };
});

// Service worker registration (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    console.log('⚡ Page loaded in:', performance.now().toFixed(2) + 'ms');
});