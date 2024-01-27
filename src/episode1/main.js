import '../style.css';

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

for (let i = 0; i < 200; i += 1) {
  context.beginPath();
  context.strokeStyle = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;
  context.moveTo(Math.random() * width, Math.random() * height);
  context.lineTo(Math.random() * width, Math.random() * height);
  context.stroke();
}
