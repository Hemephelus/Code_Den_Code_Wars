// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [5], expected_result: 1 },
  { input: [10], expected_result: 2 },
  { input: [99], expected_result: 26 },
  { input: [9], expected_result: 2 },
  { input: [1], expected_result: 1 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) continue;
    if (!isPrime(i)) count++;
  }

  function isPrime(num) {
    if (num === 1) return false;
    let multiples = 1;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) multiples++;
      if (multiples > 2) return false;
    }
    if (multiples === 2) return true;
    return false;
  }
  return count;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 1);
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
