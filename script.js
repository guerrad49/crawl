// Starfield generator.
const starfield = document.querySelector('.starfield');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starfield.appendChild(star);
}

// Get crawl text dynamically.
fetch('crawl.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('crawl-text').textContent = text;
    });

// Start button logic.
function startExperience() {
  const audio = document.getElementById('theme');
  const crawl = document.getElementById('crawl');
  const startButton = document.getElementById('start-button');

  startButton.style.display = 'none';  // Hide button.
  audio.play();  // Start music.

  // Add animation class to start crawl
  crawl.classList.add('animate-crawl');
}

document.getElementById('start-button').addEventListener('click', startExperience);
