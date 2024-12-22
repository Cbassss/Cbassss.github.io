// JavaScript for additional functionality (e.g., smooth scrolling or interactivity)
// For example, a basic scroll animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

// Get the hero title element
const heroTitle = document.querySelector('.hero-content h1');

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Calculate the scroll percentage
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 400; // Adjust the denominator for the desired fade speed

    // Set the opacity of the title based on scroll position
    heroTitle.style.opacity = opacity;
});
