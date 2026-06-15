window.addEventListener('scroll', () => {

    const heroText = document.querySelector('.hero-overlay');

    const scrollAmount = window.scrollY;

    heroText.style.opacity =
        Math.max(0, 1 - scrollAmount / 1000);

    heroText.style.transform =
        `translate(-50%, calc(-50% - ${scrollAmount * 0.3}px))`;

});