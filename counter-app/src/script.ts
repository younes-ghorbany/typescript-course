// Type Assertion

// const incrementBtn = document.getElementById("incBtn");
// const incrementBtn : HTMLButtonElement = document.getElementById("incBtn");

//INFO Button Elements
const incrementBtn = document.getElementById("incBtn") as HTMLButtonElement;
const decrementBtn = document.getElementById("decBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

// Angle Bracket -> Type Assertion
// const incBtn = <HTMLButtonElement> document.getElementById("incBtn");

//INFO Div Elements
const displayValue = document.getElementById("displayValue") as HTMLDivElement;
const countSlot = document.getElementById("countSlot") as HTMLDivElement;

// Type Assertion -> Not NULL (!)
// const incBtn = document.getElementById("incBtn")!;
