const validationInputRef = document.querySelector('#validation-input');
const valueAttribute = validationInputRef.getAttribute('data-length');

validationInputRef.addEventListener('blur', inputValidationHandler);

function inputValidationHandler() {
    if (valueAttribute === `${validationInputRef.value.length}`) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
}