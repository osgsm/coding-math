import '../style.css';

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let arrowX = width / 2;
let arrowY = height / 2;
let dx;
let dy;
let angle = 0;
let a = 0;

const render = () => {
  arrowX = width / 2 + Math.cos(a) * width * 0.3;
  arrowY = height / 2 + Math.sin(a) * height * 0.3;
  a += 0.008;
  context.clearRect(0, 0, width, height);

  context.save();
  context.translate(arrowX, arrowY);
  context.rotate(angle);

  context.font = '80px Arial';
  context.fillText('🚀', 50, 50);

  context.restore();
  requestAnimationFrame(render);
};

render();

window.addEventListener('mousemove', (event) => {
  dx = event.clientX - arrowX;
  dy = event.clientY - arrowY;
  angle = Math.atan2(dy, dx);
});
