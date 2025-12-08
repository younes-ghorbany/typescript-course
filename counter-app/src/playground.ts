function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(2, 3);

console.log(result);

//Arrow function
const sub = (a: number, b: number): number => {
  return a - b;
};

sub(3, 9);
// sub(true, '9');
// sub(2, '9');

function sumAll(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

sumAll([2, 3, 4, 5, 6]);

function greeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}
