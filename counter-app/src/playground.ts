// Type Alias

type User = {
  name: string;
  age: number;
};

function printUser(user: User) {
  console.log(`${user.name} is ${user.age}`);
}

function saveUser(user: User) {
  console.log("User saved!");
}

type ID = number;

let productId: ID = 42;
