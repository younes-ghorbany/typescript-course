//Function typing
function sum(a: number, b: number): number {
  return a + b;
}

//Function overloads

interface User {
  id: number;
  username: string;
}

const users: User[] = [
  { id: 1, username: "Younes" },
  { id: 2, username: "Amir" },
];

//Function Overloads
function findUser(value: number): User | undefined;
function findUser(value: string): User | undefined;

function parse(value: string): number;
function parse(value: number): string;

//Configuration
function findUser(value: number | string) {
  if (typeof value === "number") {
    return users.find((u) => u.id === value);
  }
  return users.find((u) => u.username === value);
}

//Calling the functions
findUser(1);
findUser("Amir");
