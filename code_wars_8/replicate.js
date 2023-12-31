// URL
// https://www.codewars.com/kata/57547f9182655569ab0008c4/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [3, 5], expected_result: [5, 5, 5] },
  { input: [5, 1], expected_result: [1, 1, 1, 1, 1] },
  { input: [0, 12], expected_result: [] },
  { input: [-1, 12], expected_result: [] },
  { input: [8, 0], expected_result: [0, 0, 0, 0, 0, 0, 0, 0] },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function solution1(times, number) {
//   let arr = [];

//   if (times === 1) {
//     return arr.push(number);
//   }

//   return solution1(times - 1, number);
// }

function solution2(times, number) {
  let arr = [];

  function replicate(t) { 
    if (t <= 0) {
      return arr;
    }

    arr.push(number);
    replicate(t - 1, number);
    return arr;
  }

  return replicate(times);
}
  console.log(solution2(-1,12));
// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution2], 2, inputs, 2);
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
