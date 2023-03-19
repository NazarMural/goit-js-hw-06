const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output ');

nameInputRef.addEventListener('input', onInputChange);

function onInputChange() {
    const name = nameInputRef.value.trim() || 'Anonymous';
    nameOutputRef.textContent = name;
}