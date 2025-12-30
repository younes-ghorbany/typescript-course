// interface User {
//   name: string;
//   age?: number;
// }
//
// const user: User = {
//   name: "Younes",
//   age: 33,
// };

// const user: User = {
//   name: "Younes",
// };

interface User {
  name: string;
  age: number;
  greet(): void;
}

const user: User = {
  name: "Younes",
  age: 33,
  greet() {
    console.log("Hello!");
  },
};

//Interface in function
interface Product {
  title: string;
  price: number;
}

function printProduct(product: Product) {
  console.log(product.title, product.price);
}

//Extend Inteface
interface BaseUser {
  name: string;
}

interface BaseUser {
  age: number;
}

const myUser: BaseUser = {
  name: "Younes",
  age: 33,
};

interface Admin extends BaseUser {
  premissins: string[];
}

// const admin: Admin = {
//   name: "Younes",
//   premissins: ["read", "write"],
// };
