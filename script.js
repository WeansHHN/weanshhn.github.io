// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll effect for navigation
    document.querySelectorAll('header nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        // Check if the target element exists
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Scroll-triggered animation
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.fade-in').forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('show');
        }
      });
    });
  
    // Submit form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        this.reset();
      });
    }
  });
  