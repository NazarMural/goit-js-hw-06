function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanColorRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', handleBackgroundColor);

function handleBackgroundColor() {
  const randomColor = getRandomHexColor();
  spanColorRef.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}