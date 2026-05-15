//INFO types
export type { CounterAction, CounterValue } from "./types";
export { LogLevel } from "./types";

//INFO logger
export { AppLogger } from "./logger";

//INFO counter logic
export { handleCounterAction } from "./counter";

//INFO dom elements
export {
  incrementBtn,
  decrementBtn,
  resetBtn,
  displayValue,
  countSlot,
} from "./dom";
