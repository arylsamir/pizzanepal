document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Pizza Nepal!');

    // Smooth scrolling to sections
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth',
                });
            }
        });
    });

    // Create Back-to-Top button
    const backToTopButton = createBackToTopButton();

    // Handle Back-to-Top button visibility and functionality
    window.addEventListener('scroll', () => {
        toggleBackToTopVisibility(backToTopButton);
    });

    backToTopButton.addEventListener('click', scrollToTop);
});

/**
 * Creates a "Back-to-Top" button and appends it to the document body.
 * @returns {HTMLElement} The created button element.
 */
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerText = '↑';
    button.id = 'back-to-top';
    Object.assign(button.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#ff5733',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'none',
        cursor: 'pointer',
        zIndex: '1000',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    });
    document.body.appendChild(button);
    return button;
}

/**
 * Scrolls the window to the top smoothly.
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

/**
 * Toggles the visibility of the "Back-to-Top" button based on the scroll position.
 * @param {HTMLElement} button - The Back-to-Top button element.
 */
function toggleBackToTopVisibility(button) {
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}
