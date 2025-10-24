document.addEventListener('DOMContentLoaded', () => {
    // Offset for sticky navbar height, adjust if you change navbar height in CSS
    const offset = 50;

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    // Get current scroll position and target position
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Optional: highlight active link on scroll
    const sections = document.querySelectorAll('main section, footer, header');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset - 10;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
});
