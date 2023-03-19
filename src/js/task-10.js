const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

createBtnRef.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes();
});