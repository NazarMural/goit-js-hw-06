let counterValue = 0;
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
valueRef.textContent = `${counterValue}`;
buttonDecrementRef.addEventListener('click', () => {
    counterValue = counterValue - 1;
    valueRef.textContent = `${counterValue}`;
})

buttonIncrementRef.addEventListener('click', () => {
    counterValue = counterValue + 1;
    valueRef.textContent = `${counterValue}`;
})