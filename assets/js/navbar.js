/**
 * Navbar scroll behavior
 * Adds sticky styling to navbar when user scrolls down
 */

(function() {
  'use strict';

  // Configuration
  const SCROLL_THRESHOLD = 50; // pixels before navbar changes
  const NAVBAR_CLASS_SCROLLED = 'navbar-scrolled';

  // Get navbar element
  const navbar = document.querySelector('.navbar');

  if (!navbar) {
    return; // Exit if no navbar found
  }

  // Track scroll position
  let lastScroll = 0;

  /**
   * Handle scroll events
   */
  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > SCROLL_THRESHOLD) {
      // User has scrolled down - add solid background
      navbar.classList.add(NAVBAR_CLASS_SCROLLED);
    } else {
      // At top of page - use transparent background
      navbar.classList.remove(NAVBAR_CLASS_SCROLLED);
    }

    lastScroll = currentScroll;
  }

  // Throttle scroll events for better performance
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Check scroll position on load
  handleScroll();
})();
