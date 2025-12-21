const STATUS_PENDING = "pending";
const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";

//Enumeration -> Enum
enum Status {
  Pending,
  Success,
  Error,
}

Status.Pending; //0
Status.Success; //1
Status.Error; //2

let currentStatus: Status = Status.Pending;

// currentStatus = "pending"; ❌

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

let responseStatus: HttpStatus = HttpStatus.OK;

enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access");
  }
}

//Enum in functions

enum OrderStatus {
  Pending = "pending",
  Paid = "paid",
  Shipped = "shipped",
}

function updateOrder(status: OrderStatus) {
  console.log(`Order is ${status}`);
}

updateOrder(OrderStatus.Shipped);
