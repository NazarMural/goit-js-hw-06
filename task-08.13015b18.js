const e={};document.querySelector(".login-form").addEventListener("submit",(function(t){t.preventDefault();const r=t.currentTarget.elements,n=r.email.value,o=r.password.value;""===n||""===o?alert("Всі поля повинні бути заповнені!"):(e.email=n,e.password=o,t.currentTarget.reset());console.log(e)}));
//# sourceMappingURL=task-08.13015b18.js.map
