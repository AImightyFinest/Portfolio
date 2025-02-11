// Navigation responsive
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation au défilement avec ScrollReveal
ScrollReveal().reveal('.hero h1, .hero p, .cta-button', { 
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.skill, .project-card', { 
    delay: 200,
    interval: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    // Par exemple, en utilisant l'API Fetch pour envoyer les données à un serveur
    console.log('Formulaire soumis');
    this.reset(); // Réinitialise le formulaire après soumission
});

// Animation du texte de la section hero
const heroText = document.querySelector('.hero h1');
const text = heroText.textContent;
heroText.textContent = '';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.animationDelay = `${i * 0.1}s`;
    heroText.appendChild(span);
}

// Ajout d'un effet de parallaxe sur la section hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});