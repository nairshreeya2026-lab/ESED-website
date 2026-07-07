// DOM Element Setup
const landingPage = document.getElementById('landing-page');
const infoPage = document.getElementById('info-page');
const groundworkPage = document.getElementById('groundwork-page');

const exploreBtn = document.getElementById('explore-btn');
const groundworkBtn = document.getElementById('groundwork-btn');
const backBtns = document.querySelectorAll('.back-to-home');
const cards = document.querySelectorAll('.flip-card');

// Navigation: Entry to About Me page
exploreBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden-page');
    infoPage.classList.remove('hidden-page');
});

// Navigation: Entry to Groundworks page
groundworkBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden-page');
    groundworkPage.classList.remove('hidden-page');
});

// Navigation: Global Back buttons to return home
backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        infoPage.classList.add('hidden-page');
        groundworkPage.classList.add('hidden-page');
        landingPage.classList.remove('hidden-page');
    });
});

// Interactive: Card flipping event pipeline
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});