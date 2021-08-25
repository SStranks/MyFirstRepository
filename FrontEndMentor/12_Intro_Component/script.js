'use strict'

// Variables
const btn = document.querySelector('button[type="submit"]');
const firstNameInput = document.querySelector('input[name="firstName"]')
const lastNameInput = document.querySelector('input[name="lastName"]')
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
    checkBool = true;
  }

  if (lastNameInput.value == '') {
    errorIcon[1].classList.remove('hidden');
    errorMsg[1].classList.remove('hidden');
    checkBool = true;
  }

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value == '' || !(emailInput.value.match(emailReg))) {
    errorIcon[2].classList.remove('hidden');
    errorMsg[2].classList.remove('hidden');
    checkBool = true;
  } 
  
    // btn.style.background = "linear-gradient(135deg, hsla(0, 80%, 86%, 0.5), hsla(0, 74%, 74%, 0.5))";
    // errorIcon.classList.remove('hidden');
    // errorMsg.classList.remove('hidden');
    // checkBool = true;

  if (passwordInput.value == '') {
    errorIcon[3].classList.remove('hidden');
    errorMsg[3].classList.remove('hidden');
    checkBool = true;
  }
}

// Reset Styles
const resetErrors = () => {
  errorIcon.forEach (function(_, index) {
    errorIcon[index].classList.add('hidden');
    errorMsg[index].classList.add('hidden');
    });
};
  
  // btn.style.background = "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";

// Event Listeners
btn.addEventListener('click', validate);
// emailInput.addEventListener('input', reset);

