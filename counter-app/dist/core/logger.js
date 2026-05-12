import { LogLevel } from "./types.js";
//INFO Generic log method used internally by other logging functions.
export const AppLogger = {
    log(message, level = LogLevel.Info) {
        const colors = {
            [LogLevel.Info]: "color: #00bfff; font-weight:bold",
            [LogLevel.Warn]: "color: #ffaa00; font-weight:bold",
            [LogLevel.Error]: "color: #ff4444; font-weight:bold",
        };
        console.log(`%c[${level}] %c${message}`, colors[level], "color:inherit");
    },
    //INFO Logs informational messages
    info(message, data) {
        this.log(message, LogLevel.Info);
        if (data)
            console.dir(data);
    },
    //INFO Logs warning messages
    warn(message, data) {
        this.log(message, LogLevel.Warn);
        if (data)
            console.dir(data);
    },
    //INFO Logs error messages
    error(message, data) {
        this.log(message, LogLevel.Error);
        if (data)
            console.dir(data);
    },
};
