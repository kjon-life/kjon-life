document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 1025;
  
    // Function to create and observe IntersectionObservers
    function createObserver(selector, observerOptions, toggleClass) {
      const items = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(toggleClass);
          } else {
            entry.target.classList.remove(toggleClass);
          }
        });
      }, observerOptions);
  
      items.forEach(item => {
        observer.observe(item);
      });
    }

    // Create observers for different sections
    createObserver('#about .phrase', { root: null, threshold: isMobile ? 0.5 : 1 }, 'active');
    createObserver('#gallery .image-box', { root: null, threshold: isMobile ? 0.5 : 1 }, 'active');
    createObserver('#blog .featured-article, #blog .article', { root: null, threshold: isMobile ? 0.01 : 0.3 }, 'fadeInUp');
    createObserver('#contact > div', { root: null, threshold: isMobile ? 0.01 : 0.7 }, 'fadeInUp');
  });
  

  