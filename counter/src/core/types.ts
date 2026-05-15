//INFO State variable
export type CounterValue = number;

//INFO Union type
export type CounterAction = "increment" | "decrement" | "reset";

//INFO LogLevels with ENUM
export enum LogLevel {
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR",
}
