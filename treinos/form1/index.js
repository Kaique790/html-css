const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('senha');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkEmail();
    checkPassword();
});

function inputErro(input, message, errorId) {
    input.classList.add('error');
    const messageErro = document.getElementById(errorId);
    if (messageErro) {
        messageErro.innerHTML = message;
    }
}

function validateEmailRegex(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    return emailRegex.test(email);
}

function checkEmail() {
    const emailValue = email.value;
    if (emailValue === "" || !validateEmailRegex(emailValue)) {
        inputErro(email, 'Digite um e-mail válido', 'email-error');
    } else {
        email.classList.remove('error');
    }
}

function checkPassword() {
    const passwordValue = password.value;
    if (passwordValue.length < 8) {
        inputErro(password, 'A senha deve conter 8 caracteres', 'password-error');
    } else {
        password.classList.remove('error');
    }
}