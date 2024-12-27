function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

let result1 = add(5, 3); // Works fine
let result2 = subtract(10, 5); // Works fine

// Corrected: divide is now defined before it's used
let result3 = divide(10, 2); 

console.log(result1, result2, result3); 