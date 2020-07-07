const phoneRegex = /\(\d{3}\) \d{7}|\(\d{4}\) \d{6}|\(\d{5}\) \d{5}/;;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkPhone() {
    let phoneNumber = document.getElementById("phone-number").value;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Номер телефона в неправильном формате, формат номера:(ХХХ) ХХХХХХХ, где 'X'-десятичная цифра. Общее количество цифр в скобках и за скобками должно равняться десяти (при этом в скобках может быть от трёх до пяти цифр) ");
        return false;
    }
    return true;
}

function checkEmail() {
    let email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        alert('Email в неправильном формате, попробуйте такой формат "example@example.com"');
        return false;
    }
    return true;
}

function checkEmptyFields() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let phoneNumber = document.getElementById("phone-number");
    let email = document.getElementById("email");
    let fieldIsMissing = false;
    if (firstName === "") {
        alert("Имя не введено");
        fieldIsMissing = true;
    } 
    if (lastName === "") {
        alert("Фамилия не введена");
        fieldIsMissing = true;
    }
    if (phoneNumber === "") {
        alert("Номер телефона не введен");
        fieldIsMissing = true;
    }
    if(email === "") {
        alert("Email не введен");
        fieldIsMissing = true;
    }
    if (fieldIsMissing === false) {
        return true;
    } else {
        return false;
    }
}

function checkData() {
    if (checkEmptyFields() && checkPhone() && checkEmail()) {
        return true;
    } else {
        return false;
    }
}