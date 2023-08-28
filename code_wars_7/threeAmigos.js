// URL
// https://www.codewars.com/kata/59922d2ab14298db2b00003a/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [[1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]],
    expected_result: [5, 3, 5],
  },
  {
    input: [[2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]],
    expected_result: [2, 2, 2],
  },
  { input: [[2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]], expected_result: [] },
  { input: [[-8, -25, 21, -7, -5]], expected_result: [21, -7, -5] },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(numbers) {
  /**
   * loop nums
   * arr =>
   * check for parity
   * store in the different array
   *
   * check for the range
   */
  let arr = [];
  let minRange = Infinity;
  for (let i = 0; i < numbers.length - 2; i++) {
    let s =
      Math.abs(numbers[i] % 2) +
      Math.abs(numbers[i + 1] % 2) +
      Math.abs(numbers[i + 2] % 2);

    if (s === 0 || s === 3) {
      let amigos = [numbers[i], numbers[i + 1], numbers[i + 2]];
      let range = Math.max(...amigos) - Math.min(...amigos);
      console.log(range);
      console.log(amigos);
      if (range < minRange) {
        minRange = range;
        arr = amigos;
      }
    }
  }

  return arr;
}

threeAmigos = (a) =>
  ([...Array(a.length - 2)]
    .map((_, i) => a.slice(i, i + 3))
    .filter(([a, b, c]) => !(a % 2) == !(b % 2) && !(b % 2) == !(c % 2))
    .map((e) => [e, Math.max(...e) - Math.min(...e)])
    .sort((a, b) => a[1] - b[1])[0] || [[]])[0];

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, threeAmigos], 2, inputs, 4);
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
