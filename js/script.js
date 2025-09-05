/**
 * Custom JavaScript for Bootstrap 5 Project
 * Author: Your Name
 * Date: 2025
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Initialize Bootstrap Components =====
    initBootstrapComponents();
    
    // ===== Custom Functions =====
    // What it does: Initializes smooth scrolling and fade-in animations
    // Why enable it: Provides polished UX with smooth navigation and engaging visual effects
    // When to uncomment: If you want smooth scrolling for anchor links or fade-in animations
    // initCustomFeatures();  // <- Uncomment this AND the function definition (lines 48-69)
    
    // ===== Event Listeners =====
    // What it does: Sets up form validation and back-to-top button functionality
    // Why enable it: Gives users visual feedback on forms and quick navigation to page top
    // When to uncomment: If you have forms with 'needs-validation' class or a back-to-top button
    // setupEventListeners();  // <- Uncomment this AND the function definition (lines 78-107)
    
});

/**
 * Initialize Bootstrap Components
 * Manually initialize any Bootstrap components that need JS
 */
function initBootstrapComponents() {
    // Initialize all tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // Initialize all popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Log initialization
    console.log('Bootstrap components initialized');
}

/**
 * Initialize Custom Features
 * What it does: Adds smooth scrolling to anchor links and fade-in animations to elements
 * Why enable it: Creates a modern, polished feel with smooth transitions and animations
 * When to uncomment: If you have anchor links (#section) or elements with 'observe-fade' class
 * IMPORTANT: Also uncomment line 17 (initCustomFeatures();) to activate this function
 */
// function initCustomFeatures() {
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             const href = this.getAttribute('href');
//             if (href !== '#' && href !== '#0') {
//                 e.preventDefault();
//                 const target = document.querySelector(href);
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             }
//         });
//     });
//     
//     // Add fade-in animation to elements when they come into view
//     observeElements();
//     
//     // Log custom features initialization
//     console.log('Custom features initialized');
// }

/**
 * Setup Event Listeners
 * What it does: Handles form validation and back-to-top button visibility/functionality
 * Why enable it: Improves form UX and provides convenient navigation on long pages
 * When to uncomment: If you add forms that need validation or want the back-to-top button to work
 * IMPORTANT: Also uncomment line 22 (setupEventListeners();) to activate this function
 */
// function setupEventListeners() {
//     // Example: Handle form submission
//     const forms = document.querySelectorAll('.needs-validation');
//     forms.forEach(form => {
//         form.addEventListener('submit', function(event) {
//             if (!form.checkValidity()) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             }
//             form.classList.add('was-validated');
//         }, false);
//     });
//     
//     // Example: Back to top button
//     const backToTopButton = document.querySelector('#back-to-top');
//     if (backToTopButton) {
//         window.addEventListener('scroll', () => {
//             if (window.pageYOffset > 300) {
//                 backToTopButton.style.display = 'block';
//             } else {
//                 backToTopButton.style.display = 'none';
//             }
//         });
//         
//         backToTopButton.addEventListener('click', () => {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         });
//     }
// }

/**
 * Intersection Observer for fade-in animations
 * What it does: Watches elements and adds fade-in animation when they enter viewport
 * Why enable it: Adds professional scroll-triggered animations that engage users
 * When to uncomment: Required if you add 'observe-fade' class to elements and define fade-in CSS
 * NOTE: This is called by initCustomFeatures() - uncomment both line 17 and lines 48-69
 */
// function observeElements() {
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
//     
//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);
//     
//     // Observe all elements with class 'observe-fade'
//     document.querySelectorAll('.observe-fade').forEach(el => {
//         observer.observe(el);
//     });
// }

/**
 * Utility Functions
 */

// Debounce function for scroll/resize events
// What it does: Limits how often a function can fire during rapid events like scrolling
// Why enable it: Prevents performance issues and laggy scrolling on complex pages
// When to uncomment: If you add scroll/resize listeners that fire frequently
// function debounce(func, wait = 20, immediate = true) {
//     let timeout;
//     return function() {
//         const context = this, args = arguments;
//         const later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }

// Check if element is in viewport
// What it does: Determines if an element is currently visible in the browser viewport
// Why enable it: Enables performance optimizations like lazy loading and scroll-based features
// When to uncomment: If you need to detect when elements enter/exit the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

/**
 * Export functions for use in other scripts if needed
 * What it does: Makes utility functions available globally via window.customJS object
 * Why enable it: Allows code reuse and modular JavaScript architecture
 * When to uncomment: If you have multiple JS files that need to share these utility functions
 */
// window.customJS = {
//     debounce,
//     isInViewport,
//     initBootstrapComponents,
//     initCustomFeatures
// };
