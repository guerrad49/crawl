// Starfield generator.
const starfield = document.querySelector('.starfield');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starfield.appendChild(star);
}

// Start button logic.
const startBtn = document.getElementById('start-button');
const crawlContainer = document.getElementById('crawl');
const music = document.getElementById('theme');

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    crawlContainer.style.display = 'block';
    music.play().catch(err => console.log('Autoplay blocked:', err));
});

// Get crawl text dynamically.
fetch('crawl.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('crawl-text').textContent = text;
    });
