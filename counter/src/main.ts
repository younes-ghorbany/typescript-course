import "./style.css";

import {
  incrementBtn,
  decrementBtn,
  resetBtn,
  handleCounterAction,
  AppLogger,
} from "./core";

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
