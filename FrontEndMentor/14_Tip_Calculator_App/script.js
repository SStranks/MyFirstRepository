'use strict';

// Elements
const resetBtn = document.getElementById('reset');
const tipBtns = document.querySelector('.buttons');
const numBill = document.querySelector('input[name="bill"]')
const numPeople = document.querySelector('input[name="people"]');
const customPercent = document.getElementById('input-custom')
const errorMsg = document.getElementById('error-msg');
const tipPerson = document.getElementById('tip-person');
const tipTotal = document.getElementById('tip-total');


// Number Validation
function numValidate() {
   // Check if input is a positive integer (input[number] accepts '-.e')
   if (numPeople.value == '' || numPeople.value < 0 || ((numPeople.value - Math.floor(numPeople.value)) !== 0)) {
    errorMsg.classList.remove('hidden');
    numPeople.focus();
    numPeople.style.outlineColor = "hsla(var(--Red), 0.65)";
    return true;
  }

  // Check if input is a positive integer (input[number] accepts '-.e')
  if (numBill.value == '' || numBill.value < 0 || ((numBill.value - Math.floor(numBill.value)) !== 0)) {
    numBill.focus();
    numBill.style.outlineColor = "hsla(var(--Red), 0.65)";
    return true;
  }
};

// Output Calculation
function outputCalculation(tipPercent) {
  let tipPerPerson;
  let tipTotalAmount;
  tipPerPerson = ((numBill.value * tipPercent) / numPeople.value);
  tipPerson.innerText = `$${tipPerPerson.toFixed(2)}`;
  tipTotalAmount = (numBill.value / numPeople.value) + tipPerPerson;
  tipTotal.innerText = `$${tipTotalAmount.toFixed(2)}`;
};



// Add Tip
let activeButton;
function addTip(e) {
  // Check ivalid inputs: Bill, People
  if (numValidate()) return;

  // Event Delegation: Get Percentage from Button
  if (e.target.classList.contains('button-tip')) {
    // Button States
    if (activeButton) activeButton.classList.remove('active');
    customPercent.value = ''; 
    activeButton = e.target;
    e.target.classList.add('active');
    resetBtn.classList.add('reset-active');

    // Output Calculation
    let percentage = e.target.textContent.slice(0, -1) / 100;
    outputCalculation(percentage);
  }
};

// Custom Tip
function customTip(e) {
  // Check ivalid inputs: Bill, People
  if (numValidate()) return;

  // Check invalid input: Custom Tip; if input is a positive integer (input[number] accepts '-.e')
  if (customPercent.value == '' || customPercent.value < 0 || ((customPercent.value - Math.floor(customPercent.value)) !== 0)) {
    customPercent.focus();
    customPercent.style.outlineColor = "hsla(var(--Red), 0.65)";
    return;
  }

  // Deactivate active button
  if (activeButton) activeButton.classList.remove('active');
  customPercent.style.outlineColor = 'hsl(var(--Strong-cyan))';

  // Output Caculation
  let percentage = e.target.value / 100;
  outputCalculation(percentage);
};

// Reset Error Msg and Colours; on 'Number of People' Input Change
function checkNum() {
  errorMsg.classList.add('hidden');
  numPeople.style.outlineColor = "hsl(var(--Strong-cyan))";
  numBill.style.outlineColor = "hsl(var(--Strong-cyan))";
};

// Reset App
function reset() {
  numBill.value = '';
  numPeople.value = '';
  customPercent.value = '';
  tipPerson.innerText = '$0.00';
  tipTotal.innerText = '$0.00';
  resetBtn.classList.remove('reset-active');
  if (activeButton) activeButton.classList.remove('active');
}

// Event Handlers
resetBtn.addEventListener('click', reset);
tipBtns.addEventListener('click', addTip);
numPeople.addEventListener('input', checkNum);
numBill.addEventListener('input', checkNum);
customPercent.addEventListener('input', customTip);
