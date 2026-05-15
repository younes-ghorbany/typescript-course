import type { CounterValue, CounterAction } from "./types";

import { AppLogger } from "./logger";

import { displayValue, countSlot, decrementBtn, resetBtn } from "./dom";

//INFO: Current state of the counter
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

//INFO Handles all counter actions
export function handleCounterAction(action: CounterAction): void {
  switch (action) {
    case "increment":
      counter += 1;
      AppLogger.info(`افزایش انجام شد : ${counter}`);
      break;

    case "decrement":
      if (counter > 0) {
        counter -= 1;
        AppLogger.info(`کاهش انجام شد : ${counter}`);
      } else {
        AppLogger.warn(`عملیات نامعتبر است!`);
      }
      break;

    case "reset":
      counter = 0;
      AppLogger.error("شمارنده ریست شد!");
      break;
  }

  updateDisplay(counter);
  updateButtons();
}
