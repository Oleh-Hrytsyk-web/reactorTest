const form = document.querySelector('.form');

form.addEventListener('submit', event => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailErrorMessage = document.querySelector('#email + .invalid-feedback');
    const passwordErrorMessage = document.querySelector('#password + .invalid-feedback');


    if (email.trim() === '') {
        event.preventDefault();
        emailErrorMessage.textContent = 'Вкажіть вашу ел. пошту';
        document.getElementById('email').classList.add('border-red');
    }
    else if (!emailPattern.test(email)) {
        event.preventDefault();
        emailErrorMessage.textContent = 'Будь ласка, введіть коректну електронну пошту.';
        document.getElementById('email').classList.add('border-red');
    } else {
        emailErrorMessage.textContent = '';
        document.getElementById('email').classList.remove('border-red');
    }

    if (password.trim() === '') {
        event.preventDefault();
        passwordErrorMessage.textContent = 'Будь ласка, введіть пароль.';
        document.getElementById('password').classList.add('border-red');

    } else {
        passwordErrorMessage.textContent = '';
        document.getElementById('password').classList.remove('border-red');

    }

});