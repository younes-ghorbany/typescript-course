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

//INFO Increments the counter
function increment(): void {
  counter += 1; // counter = counter + 1;
  updateDisplay(counter);
  updateButtons();
}

//INFO Decrements the counter
function decrement(): void {
  if (counter > 0) counter -= 1;
  updateDisplay(counter);
  updateButtons();
}

//INFO Resets the counter to ZERO
function reset(): void {
  counter = 0;
  updateDisplay(counter);
  updateButtons();
}

//INFO Event listeners
incrementBtn.addEventListener("click", () => {
  increment();
  console.log(`افزایش دادیم : ${counter}`);
});

decrementBtn.addEventListener("click", () => {
  decrement();
  console.log(`کاهش دادیم : ${counter}`);
});

resetBtn.addEventListener("click", () => {
  reset();
  console.log(`ریست نمائیدیم 😏`);
});
