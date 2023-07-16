// URL
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [[1, 1, 1, 2, 1, 1]], expected_result: 2 },
  { input: [[0, 0, 0.55, 0, 0]], expected_result: 0.55 },
  { input: [[1, 0, 0]], expected_result: 1 },
  { input: [[0, 1, 0]], expected_result: 1 },
  { input: [[0, 0, 1]], expected_result: 1 },
  { input: [[1, 1, 2, 1, 1]], expected_result: 2 },
  { input: [[3, 10, 3, 3, 3]], expected_result: 10 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr) {
    return arr.filter(a => arr.indexOf(a) === arr.lastIndexOf(a))[0]
}


function solution2(arr) {
    arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1,solution2], 2, inputs, 7);
console.log(tester);

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
