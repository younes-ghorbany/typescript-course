import { LogLevel } from "./types";

interface Logger {
  info(message: string, data?: any): void;
  warn(message: string, data?: any): void;
  error(message: string, data?: any): void;

  //Function Overloads
  log(message: string): void;
  log(message: string, level: LogLevel): void;
}

//INFO Generic log method used internally by other logging functions.
export const AppLogger: Logger = {
  log(message: string, level?: LogLevel): void {
    const finalLevel = level ?? LogLevel.Info;
    const colors = {
      [LogLevel.Info]: "color: #00bfff; font-weight:bold",
      [LogLevel.Warn]: "color: #ffaa00; font-weight:bold",
      [LogLevel.Error]: "color: #ff4444; font-weight:bold",
    };

    console.log(
      `%c[${finalLevel}] %c${message}`,
      colors[finalLevel],
      "color:inherit",
    );
  },
  //INFO Logs informational messages
  info(message, data?) {
    this.log(message, LogLevel.Info);
    if (data) console.dir(data);
  },
  //INFO Logs warning messages
  warn(message, data?) {
    this.log(message, LogLevel.Warn);
    if (data) console.dir(data);
  },
  //INFO Logs error messages
  error(message, data?) {
    this.log(message, LogLevel.Error);
    if (data) console.dir(data);
  },
};
