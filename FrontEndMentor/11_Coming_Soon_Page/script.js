'use strict'

const btn = document.querySelector('button[type="submit"]');
const emailInput = document.querySelector('input');
var checkBool = false;

const validate = (e) => {
  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // e.preventDefault()
  if (emailInput.value == '') {
    alert("None");
    return;
  }

  if (emailInput.value.match(emailReg)) {
    alert("Email Valid");
  } else {
    alert("Email Invalid");
    btn.style.background = "linear-gradient(135deg, hsla(0, 80%, 86%, 0.5), hsla(0, 74%, 74%, 0.5))";
    checkBool = true;
  }
}

const reset = (e) => {
  if (checkBool == true) {
    btn.style.background = "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";
  }
}


btn.addEventListener('click', validate);
emailInput.addEventListener('input', reset);

