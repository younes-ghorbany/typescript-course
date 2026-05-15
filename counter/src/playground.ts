//INFO Nullish Coalescing

<input type="number" id="initial-value" />

const initialInput = document.querySelector<HTMLInputElement>("#initial-value");

const initialValue = initialInput?.value ?? "0";

//initialInput?.value -> undefined -> no crash 
//initialInput.value -> null -> runtime error -> crash

console.log(initialValue);

const username = user?.name ?? "Guest";

// ?? - || OR

const count = 0;
console.log(count || 10); //10

console.log(count ?? 10); //0


