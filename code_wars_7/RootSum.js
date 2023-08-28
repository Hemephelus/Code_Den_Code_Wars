// URL
// https://www.codewars.com/kata/64cbc840129300011fa78108/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [0], expected_result: 0 },
  { input: [1], expected_result: 1 },
  { input: [8], expected_result: 10 },
  { input: [27], expected_result: 30 },
  { input: [125], expected_result: 130 },
  { input: [64], expected_result: 78 },
  { input: [16777216], expected_result: 16781662 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n) {
  console.log(n);
  let sum = 0;
  console.log(Math.pow(0, 1));
  for (let i = 1; i <= Math.sqrt(n); i++) {
    let nRoot = Math.pow(n, 1 / i);
    console.log(Math.sqrt(n));
    let intRoot = Math.round(nRoot);
    console.log(Math.pow(intRoot, i) === n, intRoot, i, Math.pow(intRoot, i));
    if (Math.pow(intRoot, i) === n) {
      sum += intRoot;
    }
  }

  console.log(sum);
  return sum;
}

function solution2(n) {
  console.log(n);
  let sum = 0;
  console.log(Math.pow(0, 1));
  let i = 0;
  while (true) {
    let nRoot = Math.pow(n, 1 / i);
    console.log(Math.sqrt(n));
    let intRoot = Math.round(nRoot);
    console.log(Math.pow(intRoot, i) === n, intRoot, i, Math.pow(intRoot, i));

    if (Math.pow(intRoot, i) === n) {
      sum += intRoot;
    }

    if (nRoot < 2) {
      break;
    }
  }

  console.log(sum);
  return sum;
}

function solution3(n) {
  let sum = 0;
  console.log(n);
  for (let i = 1; i <= Math.round(Math.sqrt(n)); i++) {
    let root = Math.round(Math.pow(n, 1 / i));
    if (Math.pow(root, i) === n) {
      sum += root;
    }
  }
  return sum;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2, solution3], 3, inputs, 3);
console.log(tester.actual_result);
console.log(tester.expected_result);

/**
 * Test Multiple solutions and input at the same time.
 * @constructor
 * @param {Array} funcs - An array of functions solutions
 * @param {number} funcIndex - Index of the function we want to test.
 * @param {Array} inputs - An array of inputs to test the function
 * @param {number} inputsIndex - Index of the input we want to test.
 */
function test(funcs, funcIndex = 1, inputs, inputsIndex = 1) {
  inputsIndex--;
  const results = {};

  for (let i = 0; i < funcs.length; i++) {
    results[i + 1] = {
      actual_result: funcs[i](...inputs[inputsIndex].input),
      expected_result: inputs[inputsIndex].expected_result,
    };
  }

  return {
    ...results[funcIndex],
  };
}
