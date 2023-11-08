const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const emailVal = form.elements.email.value;
    const passwordVal = form.elements.password.value ;


    if (emailVal === '' || passwordVal === '') {
        return alert('Всі поля повинні бути заповнені.')
    }

    const formData = {
        email: emailVal,
        password: passwordVal
    };


    console.log(formData);
    form.reset();
}


