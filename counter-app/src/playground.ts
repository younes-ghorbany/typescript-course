// Union Type

type Action = "inc" | "dec" | "reset";

let value: string | number;
value = "Hello"; //OK
value = 42; //OK
// value = false; //Error
//
// --------------------------

type Gender = "male" | "female" | "unknown";

type OrderStatus = "pending" | "shipped" | "delivered";
