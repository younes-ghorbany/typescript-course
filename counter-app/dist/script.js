//INFO Button Elements
const incrementBtn = document.getElementById("incBtn");
const decrementBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
//INFO Div Elements
const displayValue = document.getElementById("displayValue");
const countSlot = document.getElementById("countSlot");
//INFO LogLevels with ENUM
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "INFO";
    LogLevel["Warn"] = "WARN";
    LogLevel["Error"] = "ERROR";
})(LogLevel || (LogLevel = {}));
const AppLogger = {
    log(message, level = LogLevel.Info) {
        const colors = {
            [LogLevel.Info]: "color: #00bfff; font-weight:bold",
            [LogLevel.Warn]: "color: #ffaa00; font-weight:bold",
            [LogLevel.Error]: "color: #ff4444; font-weight:bold",
        };
        console.log(`%c[${level}] %c${message}`, colors[level], "color:inherit");
    },
    info(message, data) {
        this.log(message, LogLevel.Info);
        if (data)
            console.dir(data);
    },
    warn(message, data) {
        this.log(message, LogLevel.Warn);
        if (data)
            console.dir(data);
    },
    error(message, data) {
        this.log(message, LogLevel.Error);
        if (data)
            console.dir(data);
    },
};
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
AppLogger.info("سیستم آماده به کار است.", LogLevel.Error);
function handleCounterAction(action) {
    switch (action) {
        case "increment":
            counter += 1;
            AppLogger.info(`افزایش انجام شد : ${counter}`);
            break;
        case "decrement":
            if (counter > 0) {
                counter -= 1;
                AppLogger.info(`کاهش انجام شد : ${counter}`);
            }
            else {
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
//INFO Event listeners
incrementBtn.addEventListener("click", () => {
    handleCounterAction("increment");
    // console.log(`افزایش دادیم : ${counter}`);
});
decrementBtn.addEventListener("click", () => {
    handleCounterAction("decrement");
    // console.log(`کاهش دادیم : ${counter}`);
});
resetBtn.addEventListener("click", () => {
    handleCounterAction("reset");
    // console.log(`ریست نمائیدیم 😏`);
});
