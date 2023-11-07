// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//  https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [[1, 2, 0, 1, 0, 1, 0, 3, 0, 1]],
    expected_result: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
  },
  {
    input: [[false, 1, 0, 1, 2, 0, 1, 3, "a"]],
    expected_result: [false, 1, 1, 2, 1, 3, "a", 0, 0],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr) {
    return arr
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
