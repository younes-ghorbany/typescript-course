//INFO Button Elements
const incrementBtn = document.getElementById("incBtn") as HTMLButtonElement;
const decrementBtn = document.getElementById("decBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

//INFO Div Elements
const displayValue = document.getElementById("displayValue") as HTMLDivElement;
const countSlot = document.getElementById("countSlot") as HTMLDivElement;

//INFO State variable
type CounterValue = number;

let counter: CounterValue = 0;

//INFO Union type
type CounterAction = "increment" | "decrement" | "reset";

//INFO Updates the display with the current counter value
function updateDisplay(value: CounterValue): void {
  displayValue.textContent = value.toString();
  countSlot.textContent = `شمارش فعلی : ${value}`;
}

//INFO Updates the buttons state based on counter value
function updateButtons(): void {
  decrementBtn.disabled = counter === 0;
  resetBtn.disabled = counter === 0;
}

function handleCounterAction(action: CounterAction): void {
  switch (action) {
    case "increment":
      counter += 1;
      break;

    case "decrement":
      if (counter > 0) counter -= 1;
      break;

    case "reset":
      counter = 0;
      break;
  }

  updateDisplay(counter);
  updateButtons();
}

//INFO Event listeners
incrementBtn.addEventListener("click", () => {
  handleCounterAction("increment");
  console.log(`افزایش دادیم : ${counter}`);
});

decrementBtn.addEventListener("click", () => {
  handleCounterAction("decrement");
  console.log(`کاهش دادیم : ${counter}`);
});

resetBtn.addEventListener("click", () => {
  handleCounterAction("reset");
  console.log(`ریست نمائیدیم 😏`);
});
