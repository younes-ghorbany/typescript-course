//INFO Button Elements
const incrementBtn = document.getElementById("incBtn");
const decrementBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
//INFO Div Elements
const displayValue = document.getElementById("displayValue");
const countSlot = document.getElementById("countSlot");
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
function handleCounterAction(action) {
    switch (action) {
        case "increment":
            counter += 1;
            break;
        case "decrement":
            if (counter > 0)
                counter -= 1;
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
