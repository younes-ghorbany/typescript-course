//INFO More Type Assertions 🚀

/*
 * ✅ as const-----------------------------------------------
 */
const color01 = "red"; // -> string

const color02 = "red" as const; // -> "red"

const user = {
  name: "Younes",
  age: 34,
} as const;

user.age = 35; // ❌ error

/*
 * ✅ as [type]-----------------------------------------------
 */

let value: unknown = "hello";

let length = (value as string).length; //value as string

/*
 * ✅ as any-----------------------------------------------
 */

let data: any = "hello";

(data as any).doSomething();

let x = "hello" as any;

x = 123;
x.foo.bar.baz();

/*
 * ✅ satisfies -----------------------------------------------
 */

type User = {
  name: string;
  age: number;
};

const user02 = {
  name: "Ali",
  age: 20,
} satisfies User;

const user03 = {
  name: "Ali",
  age: "20",
} satisfies User;

/*
 * ✅ Null Assertion ! -----------------------------------------------
 */

let username: string | null;

console.log(username!.length);

function printName(name?: string) {
  console.log(name!.toUpperCase());
}

let user05: string | null = null;

console.log(user!.length); // 💣 runtime error
