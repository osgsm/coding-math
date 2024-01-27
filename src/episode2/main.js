import '../style.css';

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

// Fix blurry canvas
const dpr = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;
context.scale(dpr, dpr);

context.translate(-width, height - 120);
context.scale(1, -1);

for (let angle = 0; angle < Math.PI * 20; angle += 0.01) {
  const x = angle * 100;
  const y = Math.sin(angle) * 100;

  for (let i = 0; i < 200; i++) {
    context.fillStyle = `hsl(${angle * 50}, 100%, 20%)`;
    context.fillRect(x + i * 8, y + i * 8, 2, 2);
  }
}
