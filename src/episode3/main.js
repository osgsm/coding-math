import colors from 'tailwindcss/colors';
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

const centerY = height / 2;
const centerX = width / 2;
const offset = 250;
const speed = 0.05;
let angle = 0;

const render = () => {
  const x = centerX + Math.sin(angle) * offset * 2;
  const y = centerY + Math.sin(angle) * offset;
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.arc(centerX + 50, y, 10, 0, Math.PI * 2, false);
  context.arc(x, centerY, 10, 0, Math.PI * 2, false);
  context.fillStyle = colors.teal[700];
  context.fill();

  angle += speed;

  requestAnimationFrame(render);
};

render();
