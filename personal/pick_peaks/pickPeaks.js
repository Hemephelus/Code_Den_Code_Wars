// URL
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [[1, 2, 3, 6, 4, 1, 2, 3, 2, 1]],
    expected_result: { pos: [3, 7], peaks: [6, 3] },
  },
  {
    input: [[3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]],
    expected_result: { pos: [3, 7], peaks: [6, 3] },
  },
  {
    input: [[3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]],
    expected_result: { pos: [3, 7, 10], peaks: [6, 3, 2] },
  },
  {
    input: [[2, 1, 3, 1, 2, 2, 2, 2, 1]],
    expected_result: { pos: [2, 4], peaks: [3, 2] },
  },
  {
    input: [[2, 1, 3, 1, 2, 2, 2, 2]],
    expected_result: { pos: [2], peaks: [3] },
  },
  {
    input: [
      [1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3],
    ],
    expected_result: { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] },
  },
  { input: [[]], expected_result: { pos: [], peaks: [] } },
  { input: [[1, 1, 1, 1]], expected_result: { pos: [], peaks: [] } },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr) {
  let result = { pos: [], peaks: [] };
  let len = arr.length;
  if (len === 0) return result;
  result = { pos: new Set(), peaks: new Set() };
  console.log(arr);
  let a = []
  for (let i = 0; i < len; i++) {
    //   console.log(arr.slice(len-i,len))
    if (arr[i - 1] === undefined || arr[i + 1] === undefined) {
      continue;
    }
    if (arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i]) {
      if (arr[i - 1] === arr[i] && arr[i + 1] === arr[i]) continue;
      // result.pos.add(arr.indexOf(arr[i]));
      // result.pos.add(arr.indexOf(arr[i]));
      result.pos.add(i);
      result.peaks.add(arr[i]);
    }
  }

  return { pos: Array.from(result.pos), peaks: Array.from(result.peaks) };
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 5);
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
