import "./styles.css";
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 1];
errorMessage.style.display = "none";

checkButton.addEventListener("click", validateBillAndCashAmount);
function validateBillAndCashAmount() {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    //-1
    if (+cashGiven.value >= +billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value; //10
      console.log(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showMessage("no change needs to be returned");
    }
  } else {
    showMessage("invalid bill amount");
  }
  // if (billAmount > cashGiven) {
  //   console.log("You want to wash utensils?");
  // } else if (billAmount === cashGiven) {
  //   console.log("Thank you for shopping <3 ");
  // }
}

function calculateChange(amountToBeReturned) {
  // amountToBeReturned = 60
  showMessage(`change to be returned is ${amountToBeReturned} `);

  for (let i = 0; i < availableNotes.length; i++) {
    //console.log(availableNotes[i]);
    // 60 bada hai 2000 tabhi hum 60/2000 karenge
    if (amountToBeReturned >= availableNotes[i]) {
      // 60/50 -> 1.2 -> 1 -> isko hum store karenge count variable mein
      let count = Math.trunc(amountToBeReturned / availableNotes[i]);
      noOfNotes[i].innerText = count;
      amountToBeReturned = amountToBeReturned - count * availableNotes[i];
      console.log(count, " notes of ", availableNotes[i]);
      // amountToBeReturned = 60 - 1*50 = 60 - 50 = 10
      // = 7000 - 3*2000 = 7000 - 6000 = 1000
      // 7000 / 2000
    } else {
      noOfNotes[i].innerText = 0;
    }
  }
}

function showMessage(message) {
  console.log("here", message);
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
  //"The bill amount should be greater than 0";
}
