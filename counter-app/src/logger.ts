import { LogLevel } from "./types";

interface Logger {
  info(message: string, data?: any): void;
  warn(message: string, data?: any): void;
  error(message: string, data?: any): void;

  //Function Overloads
  log(message: string): void;
  log(message: string, level: LogLevel): void;
}

export const AppLogger: Logger = {
  log(message: string, level: LogLevel = LogLevel.Info): void {
    const colors = {
      [LogLevel.Info]: "color: #00bfff; font-weight:bold",
      [LogLevel.Warn]: "color: #ffaa00; font-weight:bold",
      [LogLevel.Error]: "color: #ff4444; font-weight:bold",
    };

    console.log(`%c[${level}] %c${message}`, colors[level], "color:inherit");
  },

  info(message, data?) {
    this.log(message, LogLevel.Info);
    if (data) console.dir(data);
  },
  warn(message, data?) {
    this.log(message, LogLevel.Warn);
    if (data) console.dir(data);
  },
  error(message, data?) {
    this.log(message, LogLevel.Error);
    if (data) console.dir(data);
  },
};
