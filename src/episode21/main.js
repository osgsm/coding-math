import '../style.css';

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

for (let i = 0; i < 100; i += 1) {
  context.beginPath();
  context.moveTo(Math.random() * width, Math.random() * height);
  context.lineTo(Math.random() * width, Math.random() * height);
  context.stroke();
}
