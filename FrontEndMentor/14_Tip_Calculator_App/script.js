'use strict';

// Elements
const resetBtn = document.getElementById('reset');
const tipBtns = document.querySelector('.buttons');
const numBill = document.querySelector('input[name="bill"]')
const numPeople = document.querySelector('input[name="people"]');
const errorMsg = document.getElementById('error-msg');
const tipPerson = document.getElementById('tip-person');
const tipTotal = document.getElementById('tip-total');


// Add Tip
let activeButton;
function addTip(e) {
  // Check if input is a positive integer (input[number] accepts '-.e')
  if (numPeople.value == '' || numPeople.value < 0 || ((numPeople.value - Math.floor(numPeople.value)) !== 0)) {
    errorMsg.classList.remove('hidden');
    numPeople.focus();
    numPeople.style.outlineColor = "hsla(var(--Red), 0.65)";
    return;
  }

  // Check if input is a positive integer (input[number] accepts '-.e')
  if (numBill.value == '' || numBill.value < 0 || ((numBill.value - Math.floor(numBill.value)) !== 0)) {
    numBill.focus();
    numBill.style.outlineColor = "hsla(var(--Red), 0.65)";
    return;
  }

  // Event Delegation: Get Percentage from Button
  if (e.target.classList.contains('button-tip')) {
    // Button States
    if (activeButton) activeButton.classList.remove('active');
    activeButton = e.target;
    e.target.classList.add('active');
    resetBtn.classList.add('reset-active');

    // Output Calculation
    let percentage = e.target.textContent;
    let tipPerPerson
    percentage = (percentage.slice(0, -1) / 100);
    tipPerPerson = ((numBill.value * percentage) / numPeople.value);
    tipPerson.innerText = `$${tipPerPerson}`;
    tipTotal.innerText = `$${(numBill.value / numPeople.value) + tipPerPerson}`;
  }
};


// Reset Error Msg and Colours; on 'Number of People' Input Change
function checkNum() {
  errorMsg.classList.add('hidden');
  numPeople.style.outlineColor = "hsl(var(--Strong-cyan))";
};

// Reset App
function reset() {
  numBill.value = '';
  numPeople.value = '';
  tipPerson.innerText = '$0.00';
  tipTotal.innerText = '$0.00';
  resetBtn.classList.remove('reset-active');
  if (activeButton) activeButton.classList.remove('active');
}

// Event Handlers
resetBtn.addEventListener('click', reset);
tipBtns.addEventListener('click', addTip);
numPeople.addEventListener('change', checkNum);
