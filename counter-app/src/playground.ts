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
