'use strict'

// Selectors
const btn_selectReward = document.querySelector('.card-3');
const btn_bookmark = document.querySelector('.bookmark');
const btn_backProject = document.querySelector('.backProj-btn');
const btn_closeSuccess = document.getElementById('btn-gotIt');
const btn_closeBackProject = document.querySelector('.closeModal')
const btn_radio  = document.querySelectorAll('input[name="radio-btn-1"]')
const backProj = document.querySelector('.backProjectWindow');
const modalPledges = document.querySelectorAll('.modalPledge');
const modalWindow = document.querySelector('.modal');
const successWindow = document.querySelector('.modalSuccess');
let btl_bookmark_icon;
let circle;
let path;



// Main: Toggle Bookmark
function bookmark() {
  btn_bookmark.classList.toggle('bookmarked');
  if (btn_bookmark.classList.contains('bookmarked')) {
    circle[0].setAttribute("fill", "hsl(176, 72%, 28%)"); 
    path[0].setAttribute("fill", "#FFFFFF");
    btn_bookmark.textContent = 'Bookmarked';
  } else {
    circle[0].setAttribute("fill", "#2F2F2F"); 
    path[0].setAttribute("fill", "#B1B1B1"); 
    btn_bookmark.textContent = 'Bookmark';
  }
}

// Select Reward Buttons
function selectReward(e) {
  if (e.target.textContent == "Select Reward") {
    showModal();
  }
};

// Modal: Show
function showModal() {
  modalWindow.classList.remove('hidden');
  backProj.classList.remove('hidden');
}

// Modal: Toggle Pledge Boxs - Radio Button
let currentPledge
let targetPledge
let elementChildren
function radioSelect (e) {
  // Selecting already selected pledge radio button
  if (e.target.value == currentPledge) return;

  // Reset any existing moralPledge border styles
  if (currentPledge) {
    currentPledge.style.border = "1px solid hsla(var(--Dark-gray), 0.2)";
    // Hide the pledge section of the modalPledge
    elementChildren = currentPledge.children;
    for (let element of elementChildren) {
      if (element.classList.contains('enterPledge')) {
        element.classList.add('hidden');
      }
    }
  }
  
  // Find radio button value, extract number; Loop moralPledge array and apply style
  targetPledge = (e.target.value).slice(-1);
  modalPledges[targetPledge - 1].style.border = "1px solid hsla(var(--Moderate-cyan))";
  currentPledge = modalPledges[targetPledge - 1];
  // Show the pledge section of the modalPledge
  elementChildren = currentPledge.children;
  for (let element of elementChildren) {
    if (element.classList.contains('enterPledge')) {
      element.classList.remove('hidden');
    }
  }
};

function donateAmount(e) {
  e.preventDefault;
  // Listen for Button 'Continue'; get the numerical value of the preceeding Input field.
  if (e.target.textContent == 'Continue') {
    let previousElement = e.target.previousElementSibling;
    let donateValue = previousElement.children[0].value;
    if (donateValue == '') {
      donateValue = previousElement.children[0].placeholder
    }
    // Show Success Modal, Process Donation, Adjust Values
    showSuccess();
    // Process Donations; Passes Button Element
    processDonation(donateValue, e.target);
  }
}

function processDonation(donation, element) {
  // Add Donation to Total Donations
  let totalDonation = parseInt(document.querySelector('.totalDonation').textContent.replace('$', '').replace(',',''));
  totalDonation += parseInt(donation);
  totalDonation = "$" + totalDonation.toLocaleString('en-US')
  document.querySelector('.totalDonation').textContent = totalDonation;
  // Add +1 Backer
  let totalBackers = document.querySelector('.totalBackers');
  let total = parseInt(totalBackers.textContent.replace(',',''));
  total += 1;
  totalBackers.textContent = total.toLocaleString('en-US');
  // Adjust Progress Bar
  let progressVal = (((totalDonation.replace('$', '').replace(',','')) / 100000) * 100).toFixed(2);
  if (progressVal > 100) progressVal = 100;
  document.querySelector('.prog-bar-val').style.width = `${progressVal}%`

  // Adjust Rewards Remaining Totals; Search Up Tree then back down to the value of the selected modalPledge
  let pledgeType = element.closest('.modalPledge');
  let rewardTotal;
  // Adjust Reward Number on Modal
  rewardTotal = parseInt(pledgeType.querySelector('.total').textContent);
  pledgeType.querySelector('.total').textContent = `${rewardTotal - 1}`;
  // Search for reward on main-page by using the "Item-n" class of the modal reward selection
  let rewardItem = document.querySelector(`.${pledgeType.classList[1]}`)
  let rewardTotal2 = rewardItem.querySelector('.total');
  rewardTotal2.textContent = `${rewardTotal - 1}`;

  // When available rewards is 0; Grey Out Option, Disable Radio
  if (rewardTotal - 1 == 0) {
    pledgeType.classList.add('out-of-stock');
    rewardItem.classList.add('out-of-stock');
    rewardItem.querySelector('button').textContent = "Out of Stock";
    // Uncheck Radio Buttons; Check first one as default
    for (let btn of btn_radio) {
      btn.checked = false;
    }
  }
}

// Show Success Window
function showSuccess() {
  successWindow.classList.remove('hidden');
  backProj.classList.add('hidden');
}

// Close Back Project Window
function closeBackProject() {
  backProj.classList.add('hidden');
  modalWindow.classList.add('hidden');
}

// Close Success Window
function closeSuccess() {
  let closeWindow = document.querySelector('.modalSuccess');
  closeWindow.classList.add('hidden');
  modalWindow.classList.add('hidden');
}


// Event Handlers
btn_bookmark.addEventListener('click', bookmark);
window.addEventListener("load", function() {
  btl_bookmark_icon = document.querySelector('.svgClass').contentDocument;
  circle = btl_bookmark_icon.getElementsByTagName('circle')
  path = btl_bookmark_icon.getElementsByTagName('path');
  // Alternative: Using ID (but requires editing of the SVG file to include IDs on elements)
  // circle = btl_bookmark_icon.getElementById('circle');
  // path = btl_bookmark_icon.getElementById('path');
});
btn_radio.forEach(radio => radio.addEventListener('change', radioSelect));
btn_backProject.addEventListener('click', showModal);
btn_closeSuccess.addEventListener('click', closeSuccess)
btn_closeBackProject.addEventListener('click', closeBackProject)
btn_selectReward.addEventListener('click', selectReward)
backProj.addEventListener('click', donateAmount);


