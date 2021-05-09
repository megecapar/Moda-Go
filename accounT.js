function store() {
    var nameValue = document.getElementById('username');
    var passValue = document.getElementById('password');
    var emailValue = document.getElementById('email');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (nameValue.value.length == 0) {
    alert('Please fill in username');
    }
    else if (emailValue.value.length == 0) {
        alert('Please fill in email');

    } else if (passValue.value.length == 0) {
        alert('Please fill in password');

    } else if (passValue.value.length > 10) {
        alert('Max of 10');

    } else if (!passValue.value.match(numbers)) {
        alert('Please add 1 number');

    } else if (!passValue.value.match(upperCaseLetters)) {
        alert('Please add 1 uppercase letter');

    } else if (!passValue.value.match(lowerCaseLetters)) {
        alert('Please add 1 lowercase letter');

    } else if (!emailValue.value.match('@')) {
        alert('Please enter a valid email address');


    } else {
        localStorage.setItem('nameValue', nameValue.value);
        localStorage.setItem('passValue', passValue.value);
        localStorage.setItem('emailValue',emailValue.value)
        alert('Your account has been created');
    }
}

function check() {
    var storedName = localStorage.getItem('nameValue');
    var storedPassword = localStorage.getItem('passValue');

    var userName = document.getElementById('loginID');
    var userPass = document.getElementById('loginPass');

    if (userName.value == storedName && userPass.value == storedPassword) {
        alert('You are logged in.');
    } else {
        alert('Error! Your username or password is incorrect.');
    }
}


function doFirst() {
    var button = document.getElementById('kaydet')
    button.addEventListener("click", store, false)
    var button2 = document.getElementById('logiN')
    button2.addEventListener("click", check, false)
}

function ShowHideLogin() {
    var x = document.getElementById("loginPass")
    if (x.type === "password") {
        x.type = "text"
    } else {
        x.type = "password"
    }
}

window.addEventListener("load", doFirst, false)