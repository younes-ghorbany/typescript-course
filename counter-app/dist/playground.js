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
function parseData(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    return "Invalid data";
}
parseData("younes ghorbany");
parseData(22);
