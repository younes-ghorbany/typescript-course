// ** -> Unknown Type
// let data: any;
// let value: unknown;
//
// data.toUpperCase();
// value.toUpperCase();

// let value: unknown;
//
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }

// function parseData(data: unknown) {
//   if (typeof data === "string") {
//     return data.toUpperCase();
//   }
//
//   return "Invalid data";
// }
//
// let result1 = parseData("younes ghorbany");
// let result2 = parseData(22);
//
// console.log(result1);
// console.log(result2);

// ** -> Never Type

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

function log(): void {
  console.log("Hello");
}

function crash(): never {
  throw new Error("Boom");
}
