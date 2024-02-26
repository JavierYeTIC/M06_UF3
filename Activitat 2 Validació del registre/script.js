function validateUsername() {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'El camp no pot estar buit';
        usernameInput.classList.add('error');
    } else {
        usernameError.textContent = '';
        usernameInput.classList.remove('error');
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
        emailError.textContent = 'Correu electrònic no vàlid';
        emailInput.classList.add('error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const validMessage = document.getElementById('passwordValid');
    const password = passwordInput.value.trim();

    const lowerCaseLetters = /[a-z]/;
    const upperCaseLetters = /[A-Z]/;
    const numbers = /[0-9]/;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    let errorMessage = '';
    let messageValid = '';
    validMessage.innerHTML = '';
    let saltaLine = '</br>';

    if (password.length < 8 || password.length > 15) {
        errorMessage += saltaLine+'La longitud debe estar entre 8 y 15 caracteres. ' + saltaLine;
    }else {
        messageValid += saltaLine+' Contiene al menos una letra minúscula. '+ saltaLine;
    }

    if (!lowerCaseLetters.test(password)) {
        errorMessage += 'Debe contener al menos una letra minúscula. '+ saltaLine;
    } else {
        messageValid += ' Contiene al menos una letra minúscula. '+ saltaLine;
    }

    if (!upperCaseLetters.test(password)) {
        errorMessage += 'Debe contener al menos una letra mayúscula. '+ saltaLine;
    } else {
        messageValid += ' Contiene al menos una letra mayúscula. '+ saltaLine;
    }

    if (!numbers.test(password)) {
        errorMessage += 'Debe contener al menos un número. '+ saltaLine;
    } else {
        messageValid += ' Contiene al menos un número. '+ saltaLine;
    }

    if (!specialChars.test(password)) {
        errorMessage += 'Debe contener al menos un carácter especial. '+ saltaLine;
    } else {
        messageValid += ' Contiene al menos un carácter especial. '+ saltaLine;
    }
    if (passwordInput == null) {
        validMessage.innerHTML = '';
    }
    if (messageValid !== '') {
        validMessage.innerHTML = messageValid;
        passwordInput.classList.remove('error');
    }
    if (errorMessage !== '') {
        passwordError.innerHTML = errorMessage;
        passwordInput.classList.add('error');
    } else {
        passwordError.innerHTML = '';
        passwordInput.classList.remove('error');
    }
}



function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Les contrasenyes no coincideixen';
        confirmPasswordInput.classList.add('error');
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordInput.classList.remove('error');
    }
}

function validatePostalAddress() {
    const postalAddressInput = document.getElementById('postalAddress');
    const postalAddressError = document.getElementById('postalAddressError');

    if (postalAddressInput.value.trim() === '') {
        postalAddressError.textContent = 'El camp no pot estar buit';
        postalAddressInput.classList.add('error');
    } else {
        postalAddressError.textContent = '';
        postalAddressInput.classList.remove('error');
    }
}

function validateForm() {
    // Llama a las funciones de validación individuales
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePostalAddress();

    // Comprueba si hay algún campo con la clase de error
    const errorFields = document.querySelectorAll('.error');

    // Si no hay campos con error, retorna true; de lo contrario, retorna false
    console.log(errorFields);

    return errorFields.length === 0;
}
