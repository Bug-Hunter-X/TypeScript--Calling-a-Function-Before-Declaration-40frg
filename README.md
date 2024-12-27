# TypeScript: Calling Function Before Declaration

This repository demonstrates a common runtime error that TypeScript might not catch immediately. The code involves calling a function before its declaration, leading to unexpected behavior.

## The Bug
The `bug.ts` file shows a scenario where the `divide` function is called before it is defined.  While JavaScript allows hoisting, TypeScript's type checking is less forgiving in this particular scenario and may only emit warnings instead of errors.

## The Solution
The `bugSolution.ts` file presents the corrected version, where the function declaration precedes the function call. This ensures that the function is defined and ready for use when invoked.

## How to Reproduce
1. Clone the repository.
2. Open `bug.ts` and `bugSolution.ts`.
3. Compile and run both files using a TypeScript compiler (tsc) and a Node.js runtime.