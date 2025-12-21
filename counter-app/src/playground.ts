// let scores: number[] = [10,20,30];

// let user: [string, number];

// ✅
// user = ["Younes", 33];

// ❌
// user = [28, "Younes"];
// user = ["Younes"];

//RESTful API
// ["success", 200]

let response: [string, number];

response = ["success", 200];

// Tuple in functions

function getUser(): [string, number] {
  return ["Younes", 33];
}

let user: [string, number] = ["Younes", 33];

const userName = user[0];
const userAge = user[1];

// ❌
user.push(30);
