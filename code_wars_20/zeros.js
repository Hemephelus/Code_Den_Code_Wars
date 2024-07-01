// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [0], expected_result: 0 },
  { input: [5], expected_result: 1 },
  { input: [6], expected_result: 1 },
  { input: [30], expected_result: 7 },
  { input: [12], expected_result: 2 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n) {
  n = 100;
  for (let i = 0; i <= n; i++) {
    console.log(thinkingAboutMen(i), trailingZero(i), i);
  }
}

function thinkingAboutMen(n) {
  let final = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      let val = i;
      while (true) {
        final += 1;
        val = val / 5;
        if (val % 5 !== 0) {
          break;
        }
      }
    }
  }
  return final;
}

function trailingZero(n) {
  let p = 0;
  let counter = 0;
  while (true) {
    counter = Math.floor(n / 5);
    if (Math.pow(5, p) < n) {
      counter++;
      break;
    }
    if (Math.pow(5, p) > n) {
      break;
    }
  }
  return counter;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 5);
console.log(tester.actual_result);
console.log(tester.expected_result);

console.log(numberOfInputs);

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

  return [
    {
      ...results[funcIndex],
    },
    inputs.length,
  ];
}
