const valueForm = {};
const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', handleLoginForm);

function handleLoginForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === "" || password === "") {
        alert("Всі поля повинні бути заповнені!")
    } else {
        valueForm.email = email;
        valueForm.password = password;
        event.currentTarget.reset();
    }
    console.log(valueForm);
}