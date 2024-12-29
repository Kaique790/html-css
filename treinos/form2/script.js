const form = document.getElementById('form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const senha = document.getElementById('password')
const confirmarSenha = document.getElementById('password-confirmation')

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    checkForm()    
})

function inputError (input, message){
    const formItem = input.parentElement;
    const textErro = formItem.querySelector('a')
    formItem.classList.add('error');

    textErro.innerText = message
}

function checkUsername(){
    const usernameValue = username.value
    if (usernameValue === ""){
        inputError(username, 'Preencha um username!')
    } else {
        const formItem = username.parentElement
        formItem.classList.remove('error')
    }
}

function checkEmail (){
    const emailValue = email.value
    if (emailValue === ""){
        inputError(email, 'E-mail é obrigatório!')
    }

    else {
        const formItem = email.parentElement
        formItem.classList.remove('error')
    }
}

function checkPassword(){
    const passwordValue = senha.value
    if   (passwordValue === ""){
        inputError(senha, 'Digite uma senha!')
    } else if (passwordValue.length < 8) {
        inputError(senha, 'A senha deve conter 8 caracteres!')
    } else {
        formItem = senha.parentElement;
        formItem.classList.remove('error')
    }
}

function confirmPassword(){
    const passwordValue = senha.value
    const confirmPasswordValue = confirmarSenha.value
    if (confirmPasswordValue !== passwordValue) {
        inputError(confirmarSenha, 'As senhas não correspondem!')
    } else {
        const formItem = confirmarSenha.parentElement;
        formItem.classList.remove('error')
    }
}

function checkForm(){
    checkUsername();
    checkEmail ();
    checkPassword();
    confirmPassword();

    const formItems = form.querySelectorAll('.form-content')

    const isValid =  [...formItems].every( (item) => {
        return item.className === "form-content"
    })
    if (isValid){
        alert('Cadastrado com sucesso!')
    }
}