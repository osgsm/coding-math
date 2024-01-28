import '../style.css';

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Fix blurry canvas
const dpr = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;
context.scale(dpr, dpr);

context.translate(0, 0);

const centerX = width / 2;
const centerY = height / 2;
const xRadius = 1200;
const yRadius = 400;
const numObjects = 5000;
const slice = (Math.PI * 2) / numObjects;
let angle = 0;
let x;
let y;

for (let i = 0; i < numObjects; i++) {
  angle = slice * i;
  x = centerX + Math.cos(angle) * xRadius;
  y = centerY + Math.sin(angle + i / 198) * yRadius;
  context.beginPath();
  context.arc(x, y, 2, 0, Math.PI * 2, false);
  context.fillStyle = `hsl(${i / 100 + 240}, 100%, 60%)`;
  context.fill();
}

for (let i = 0; i < numObjects; i++) {
  angle = slice * i;
  x = centerX + Math.cos(angle) * xRadius + 100;
  y = centerY + Math.sin(angle + i / 198.5) * yRadius;
  context.beginPath();
  context.arc(x, y, 2, 0, Math.PI * 2, false);
  context.fillStyle = `hsl(${i / 100 + 10}, 100%, 60%)`;
  context.fill();
}
