// URL
// https://www.codewars.com/kata/544d114f84e41094a9000439/solutions/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [4], expected_result: true },
  { input: [16], expected_result: true },
  { input: [1], expected_result: true },
  { input: [8], expected_result: false },
  { input: [20], expected_result: false },
  { input: [32], expected_result: false },
  { input: [44], expected_result: false },
  { input: [3.1415], expected_result: false },
  { input: ["1"], expected_result: false },
  { input: ["4"], expected_result: false },
  { input: [null], expected_result: false },
  { input: [undefined], expected_result: false },
  { input: [function () {}], expected_result: false },
  { input: [-64], expected_result: false },
  { input: [NaN], expected_result: false },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n) {
  console.log(n);
  if (isNaN(n) || n < 0) return false;
  // 4^0 = 1
  // 4^1 = 4
  // 4^2 = 16
  // 4^3 = 64
  // 4^.
  let condition = false; 
  let power = 0;
  while (condition === false) {
    let pOf4 = Math.pow(4, power);
    console.log(power);
    console.log(pOf4);
    console.log(pOf4 !== n);

    if (pOf4 !== n) {
      power++;
    } else {
      condition = true;
    }

    if (pOf4 > n) break;
  }
  return condition;
}

function solution2(n) {
  console.log(n);
  console.log(isNaN(n));
  if (isNaN(n) || n < 0) return false;
  let a = Math.log(n) / Math.log(4);
  console.log(a);
  Number.isInteger()
  return a % 1 === 0 ? true : false;
}

function solution3(n) {
    return Number.isInteger(n) && Number.isInteger(Math.log(n)/Math.log(4));
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2, solution3], 1, inputs, 9);
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
