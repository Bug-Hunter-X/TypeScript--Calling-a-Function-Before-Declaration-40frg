function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Works fine
let result2 = subtract(10, 5); // Works fine

// Uncommon error: using a function that's not defined yet
let result3 = divide(10, 2); // TypeScript won't catch this immediately if `divide` is defined later

function divide(a: number, b: number): number {
  return a / b;
}

console.log(result1, result2, result3);