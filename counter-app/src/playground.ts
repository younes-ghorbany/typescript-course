/*Primitive Types:
  number
  string
  boolean
  null
  undefined
  void
  bigint
  symbol
*/

//number
let age: number = 33;
age = 25;

//string
let fullname: string = "Younes Ghorbany";
fullname = "Ali";

let hello: string;
hello = "World";

//boolean
let isActive: boolean = true;
isActive = false;

//null && undefined
let car;
console.log(car);

let currentUser = { name: "Younes" };

//logout
currentUser = null;

let x: null;
let y: undefined;

x = null; //OK
// x = 12; //Error

y = undefined; //OK
// y = "Hello"; //Error

let user: string | null = null;
user = "Younes";

//bigint
const big1 = 131321654884541654654654654n;

const big2 = BigInt(42);

const a = 10n;
const b = 5;

// console.log(a + b);
console.log(a + BigInt(b)); //OK

let id: bigint = 123n;

id = 456n; //OK
id = BigInt(3); //OK
id = 10; //Error

//Symbol
const id1 = Symbol("user");
const id2 = Symbol("user");

console.log(id1 === id2); // false

const token = Symbol("token");

const user1 = {
  name: "Younes",
  [token]: "secret-token-123",
};

console.log(user[token]); // secret-token-123

const START = Symbol("START");
const STOP = Symbol("STOP");

function run(state: symbol) {
  if (state === START) console.log("Started");
}

let s: symbol = Symbol();

s = Symbol(22);
