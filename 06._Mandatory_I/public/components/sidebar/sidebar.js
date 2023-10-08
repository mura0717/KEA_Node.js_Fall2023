//Home Icon Display:
document.addEventListener("DOMContentLoaded", function homeIconOnPageLoad() {
  const homeIcon = document.getElementById("home-icon");
  if (homeIcon) {
    homeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
    </svg>`;
  }
})

//=======================SIDE-BAR ARROWS==========================================
//Sidebar Arrow Icons:
const arrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16" id="expand-icon">
<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
`
const arrowDown = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16" id="collapse-icon">
<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
`
//OnClick Arrow Change:
const collapseButtons = document.querySelectorAll(".collapse-button");

collapseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    iconElement = button.previousElementSibling;
    if (button.classList.contains('collapsed')){
      iconElement.innerHTML = arrowRight;
    } else {
      iconElement.innerHTML = arrowDown;
    }
  })
})

// Update arrowDirection after assigned state:
function applyButtonDirections(button) {
  const buttonId = button.id;
  const iconElement = button.previousElementSibling;

  if (buttonStates[buttonId] === true) {
    iconElement.innerHTML = arrowDown;
  } else {
    iconElement.innerHTML = arrowRight;
  }
}

//=======================SIDE-BAR COLLAPSE TRACKING=============================

const buttonStates = JSON.parse(sessionStorage.getItem('buttonStates')) || {};
const buttons = document.querySelectorAll(".collapse-button");

// Default button states = false if undefined:
buttons.forEach((button) => {
  const buttonId = button.id;
  if (buttonStates[buttonId] === undefined) {
    buttonStates[buttonId] = false;
  }
});

function assignButtonState(button) {
  const buttonId = button.id;
  buttonStates[buttonId] = !buttonStates[buttonId];
  sessionStorage.setItem('buttonStates', JSON.stringify(buttonStates));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    assignButtonState(button);
  });
});

// Update buttonState after assigned state:
function applyButtonStates(button) {
  const buttonId = button.id;
  const targetId = button.getAttribute('data-bs-target'); // Get target ID by data attribute
  const targetElement = document.querySelector(targetId); // Find the target element by ID

  if (buttonStates[buttonId] === true) {
    targetElement.classList.add("show");
  } else {
    targetElement.classList.remove("show"); 
  }
}

//==========APPLY BUTTON STATES & ARROW DIRECTIONS ON PAGE LOAD======================

document.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => {
    applyButtonStates(button);
    applyButtonDirections(button);
  });
});








