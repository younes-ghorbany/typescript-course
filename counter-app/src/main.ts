import { incrementBtn, decrementBtn, resetBtn } from "./dom";

import { handleCounterAction } from "./counter";

import { AppLogger } from "./logger";

AppLogger.info("Application started. 🚀");

//INFO Event listeners
incrementBtn.addEventListener("click", () => {
  handleCounterAction("increment");
});

decrementBtn.addEventListener("click", () => {
  handleCounterAction("decrement");
});

resetBtn.addEventListener("click", () => {
  handleCounterAction("reset");
});
