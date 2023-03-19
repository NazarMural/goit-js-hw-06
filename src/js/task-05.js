const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output ');

nameInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        nameOutputRef.textContent = 'Anonymous';
    } else {
        nameOutputRef.textContent = event.currentTarget.value;
    }
}