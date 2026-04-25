// Type Assertion
// const incrementBtn = document.getElementById("incBtn");
// const incrementBtn : HTMLButtonElement = document.getElementById("incBtn");
//INFO Button Elements
const incrementBtn = document.getElementById("incBtn");
const decrementBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
// Angle Bracket -> Type Assertion
// const incBtn = <HTMLButtonElement> document.getElementById("incBtn");
//INFO Div Elements
const displayValue = document.getElementById("displayValue");
const countSlot = document.getElementById("countSlot");
// Type Assertion -> Not NULL (!)
// const incBtn = document.getElementById("incBtn")!;
//INFO State variable
let counter = 0;
//INFO Updates the display with the current counter value
function updateDisplay(value) {
    displayValue.textContent = value.toString();
    countSlot.textContent = `شمارش فعلی : ${value}`;
}
//INFO Updates the buttons state based on counter value
function updateButtons() {
    decrementBtn.disabled = counter === 0;
    resetBtn.disabled = counter === 0;
}
//INFO Increments the counter
function increment() {
    counter += 1; // counter = counter + 1;
    updateDisplay(counter);
    updateButtons();
}
//INFO Decrements the counter
function decrement() {
    if (counter > 0)
        counter -= 1;
    updateDisplay(counter);
    updateButtons();
}
//INFO Resets the counter to ZERO
function reset() {
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
