// let user: {
//   name: string;
//   age: number;
// };

// ✅
// user = {
//   name: "Younes",
//   age: 33,
// };

// ❌ Error
// user = {
//   name: "Younes",
//   age: "33",
// };

// let user: {
//   name: string;
//   age?: number;
// };
//
// user = {
//   name: "Younes",
// };
//
// user = {
//   name: "Younes",
//   age: 33,
// };
//
// let product: {
//   id: number;
//   title: string;
//   tags: string[];
//   getPrice: () => number;
// };

//Object type in functions
// function printUser(user: { name: string; age: number }) {
//   console.log(`Name: ${user.name}`);
//   console.log(`Age: ${user.age}`);
// }

// ✅
// printUser({ name: "Younes", age: 33 });

// ❌
// printUser({ name: "Younes" });

//Optional property in function
// function greet(user: { name: string; age?: number }) {
//   console.log(`Hello ${user.name}`);
// }

//Object Literal
// const user = {
//   name: "Younes",
//   age: 33
// };

//Object Type
// let user: {
//   name: string;
//   age: number;
// }
