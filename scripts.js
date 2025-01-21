// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic text in the hero section
    const phrases = ["I am a Software Developer", "I am a Front-End Developer"];
    const dynamicTextElement = document.getElementById('dynamicText');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % phrases.length;
        dynamicTextElement.textContent = phrases[index];
    }, 3000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adding hover animations to cards in the Projects section
    document.querySelectorAll('#projects .card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '';
        });
    });
});
