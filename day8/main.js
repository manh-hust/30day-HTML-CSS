const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const form = document.forms

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message
}

function showSucces(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = ''
}

function checkEmpty(arrInput) {
    let isEmpty = false;
    arrInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmpty = true;
            showError(input, 'Bạn chưa điền trường này!');
        } else {
            showSucces(input)
        }
    });

    return isEmpty;
}

function checkEmail(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSucces(input)
    } else {
        showError(input, 'Email không hợp lệ!')
    }
    return isEmailError
}

function checkLength(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Trường này phải có ít nhất ${min} kí tự!`)
        return true;
    }
    if (input.value.length < min) {
        showError(input, `Trường này có tối đa ${max} kí tự!`)
        return true;
    }
    showSucces(input)
    return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp!');
        return true;
    }
    return false;
}

// Check khi submit form

form[0].addEventListener('submit', function (e) {
    e.preventDefault();

    let isEmpty = checkEmpty([username, email, password, confirmPassword]);
    let isEmailError = checkEmail(email);
    let isUsernameLength = checkLength(username, 8, 128);
    let isPasswordLength = checkLength(password, 6, 128);
    let isCheckMatchPassword = checkMatchPassword(password, confirmPassword);

    if (isCheckMatchPassword || isEmailError || isEmpty || isPasswordLength || isUsernameLength) {

    } else {

    }
})