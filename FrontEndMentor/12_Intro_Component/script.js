'use strict'

// Variables
const btn = document.querySelector('button[type="submit"]');
const inputFields = document.querySelectorAll('input');
const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorIcon = document.querySelectorAll('.error-icon');
const errorMsg = document.querySelectorAll('.error-msg');
var checkBool = false;


// Validation
const validate = (e) => {
  // Reset Errors
  if (checkBool == true) {
    resetErrors();
  }
  
  if (firstNameInput.value == '') {
    errorIcon[0].classList.remove('hidden');
    errorMsg[0].classList.remove('hidden');
    inputFields[0].style.border = "2px solid hsla(var(--Red), 0.6)";
    checkBool = true;
  }

  if (lastNameInput.value == '') {
    errorIcon[1].classList.remove('hidden');
    errorMsg[1].classList.remove('hidden');
    inputFields[1].style.border = "2px solid hsla(var(--Red), 0.6)";
    checkBool = true;
  }

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value == '' || !(emailInput.value.match(emailReg))) {
    errorIcon[2].classList.remove('hidden');
    errorMsg[2].classList.remove('hidden');
    inputFields[2].style.border = "2px solid hsla(var(--Red), 0.6)";
    checkBool = true;
  } 

  if (passwordInput.value == '') {
    errorIcon[3].classList.remove('hidden');
    errorMsg[3].classList.remove('hidden');
    inputFields[3].style.border = "2px solid hsla(var(--Red), 0.6)";
    checkBool = true;
  }
}

// Reset Styles
const resetErrors = () => {
  errorIcon.forEach (function(_, index) {
    errorIcon[index].classList.add('hidden');
    errorMsg[index].classList.add('hidden');
    inputFields[index].style.border = "1px solid hsla(0, 0%, 0%, 0.4)";
    });
};


// Event Listeners
btn.addEventListener('click', validate);

