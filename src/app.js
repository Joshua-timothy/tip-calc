"use strict";

const errBillInputEl = document.querySelector(".error-message--bill");
const billInput = document.querySelector(".bill-input");
const errNumInputEl = document.querySelector(".error-message--num");
const numberOfPeopleInput = document.querySelector(".peoplesInput");

const btns = document.querySelectorAll(".btn");
const fivePercentBtn = document.querySelector(".fivePerbtn");
const tenPercentBtn = document.querySelector(".tenPerbtn");
const fifteenPercentBtn = document.querySelector(".fifteenPerbtn");
const twentyFivePercentBtn = document.querySelector(".twentyFivePerbtn");
const fiftyPercentBtn = document.querySelector(".fiftyPerbtn");
const resetBtn = document.querySelector(".btn-reset");

const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".bill-total");

///////////////////////////////////////
// Tip percentage values
const tipPercentages = {
  fivePercent: 0.05,
  tenPercent: 0.1,
  fifteenPercent: 0.15,
  twentyFivePercent: 0.25,
  fiftyPercent: 0.5,
};

// function defualt value
const defaultValues = () => {
  if (!resetBtn.classList.contains("cursor-not-allowed")) {
    billInput.value = "";
    numberOfPeopleInput.value = "";
    tipAmount.textContent = "0.00";
    tipTotal.textContent = "0.00";
    resetBtn.classList.add("cursor-not-allowed");
    resetBtn.classList.remove("cursor-pointer");
    resetBtn.style.background = "#256765";
    btns.forEach((button) => {
      button.classList.remove("active");
    });
  }
};

function handleClickedButton(e) {
  btns.forEach((button) => {
    button.classList.remove("active");
  });
  e.target.classList.add("active");
}

btns.forEach((button) => {
  button.addEventListener("click", handleClickedButton);
});

// This code is the same version of the handleClickedButton function but in a simple format
/* btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    btns.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}); */

///////////////////////////////////////
// function to calculate tip
let tipSplit;
const showErrNDisplayBill = function (tip, tipPercentage) {
  // Checking for format error
  if (billInput.value === "") {
    errBillInputEl.textContent = "can't be blank";
    billInput.style.border = "2px #B07B5E solid";
  } else if (!Number(billInput.value)) {
    errBillInputEl.textContent = "Numbers only";
    billInput.style.border = "2px #B07B5E solid";
  } else if (!Number(numberOfPeopleInput.value) && numberOfPeopleInput.value) {
    errNumInputEl.textContent = "Numbers only";
    numberOfPeopleInput.style.border = "2px #B07B5E solid";
  } else if (numberOfPeopleInput.value === 0) {
    errNumInputEl.textContent = "Can't be zero";
    numberOfPeopleInput.style.border = "2px #B07B5E solid";
  } else {
    errBillInputEl.textContent = "";
    billInput.style.border = "2px transparent solid";
    errNumInputEl.textContent = "";
    numberOfPeopleInput.style.border = "2px transparent solid";
  }

  // Display tip if format is correct
  if (
    numberOfPeopleInput.value !== "" &&
    Number(numberOfPeopleInput.value) &&
    Number(billInput.value) &&
    numberOfPeopleInput.value !== 0
  ) {
    tip = Number(billInput.value) * tipPercentage;
    tipSplit = tip / Number(numberOfPeopleInput.value);
    tipAmount.textContent = tipSplit;
    tipAmount.textContent = tipAmount.textContent.slice(0, 4);
    tipTotal.textContent = tip;
    tipTotal.textContent = tipTotal.textContent.slice(0, 4);
  }
};

///////////////////////////////////////
// function to make reset button clickable
const ResetBtnClickable = () => {
  resetBtn.classList.remove("cursor-not-allowed");
  resetBtn.classList.add("cursor-pointer");
  resetBtn.style.background = "hsl(172, 67%, 45%)";
  resetBtn.classList.remove("bg-[#256765]");
};

let fivePercentTip;
let tenPercentTip;
let fifteenPercentTip;
let twentyFivePercentTip;
let fiftyPercentTip;
///////////////////////////////////////
/* function to calculate and update the tip, make the reset btn clickable and display value
 as soon as an "input" event happens on the input for number of people */
const displayFivePercentValue = () => {
  numberOfPeopleInput.addEventListener("input", function () {
    showErrNDisplayBill(fivePercentTip, tipPercentages.fivePercent);
    ResetBtnClickable();
  });

  billInput.addEventListener("input", function () {
    showErrNDisplayBill(fivePercentTip, tipPercentages.fivePercent);
  });
};

const displayTenPercentValue = () => {
  numberOfPeopleInput.addEventListener("input", function () {
    showErrNDisplayBill(tenPercentTip, tipPercentages.tenPercent);
    ResetBtnClickable();
  });
  billInput.addEventListener("input", function () {
    showErrNDisplayBill(tenPercentTip, tipPercentages.tenPercent);
  });
};

const displayFifteenPercentValue = () => {
  numberOfPeopleInput.addEventListener("input", function () {
    showErrNDisplayBill(fifteenPercentTip, tipPercentages.fifteenPercent);
    ResetBtnClickable();
  });
  billInput.addEventListener("input", function () {
    showErrNDisplayBill(fifteenPercentTip, tipPercentages.fifteenPercent);
  });
};

const displayTwentyFivePercentValue = () => {
  numberOfPeopleInput.addEventListener("input", function () {
    showErrNDisplayBill(twentyFivePercentTip, tipPercentages.twentyFivePercent);
    ResetBtnClickable();
  });
  billInput.addEventListener("input", function () {
    showErrNDisplayBill(twentyFivePercentTip, tipPercentages.twentyFivePercent);
  });
};

const displayFiftyPercentValue = () => {
  numberOfPeopleInput.addEventListener("input", function () {
    showErrNDisplayBill(fiftyPercentTip, tipPercentages.fiftyPercent);
    ResetBtnClickable();
  });
  billInput.addEventListener("input", function () {
    showErrNDisplayBill(fifteenPercentTip, tipPercentages.fiftyPercent);
  });
};
///////////////////////////////////////

///////////////////////////////////////
/* function to calculate tip on click per tip % button, this funtion is also
used to call the function for calculating and updatng the tip value when the "input" event happens on the input fileds for bill and number of people input, so after any tip % button is clicked it would then call that function that listens for an "input" event and display tip value based on the tip % button clicked */
fivePercentBtn.addEventListener("click", function () {
  displayFivePercentValue();
  showErrNDisplayBill(fivePercentTip, tipPercentages.fivePercent);
});

tenPercentBtn.addEventListener("click", function () {
  displayTenPercentValue();
  showErrNDisplayBill(tenPercentTip, tipPercentages.tenPercent);
});

fifteenPercentBtn.addEventListener("click", function () {
  displayFifteenPercentValue();
  showErrNDisplayBill(fifteenPercentTip, tipPercentages.fifteenPercent);
});

twentyFivePercentBtn.addEventListener("click", function () {
  displayTwentyFivePercentValue();
  showErrNDisplayBill(twentyFivePercentTip, tipPercentages.twentyFivePercent);
});

fiftyPercentBtn.addEventListener("click", function () {
  displayFiftyPercentValue();
  showErrNDisplayBill(fiftyPercentTip, tipPercentages.fiftyPercent);
});
///////////////////////////////////////

resetBtn.addEventListener("click", defaultValues);
