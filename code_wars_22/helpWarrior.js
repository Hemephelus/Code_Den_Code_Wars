// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [{ input: [2, 11], expected_result: {} }];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(honorScore, targetHonorScore) {
  if (honorScore >= targetHonorScore) {
    return {};
  }

  const diff = targetHonorScore - honorScore;
  const max2pt = Math.floor(diff / 2);
  const max1pt = diff % 2;

  return {
    "1kyus": max2pt,
    "2kyus": max1pt,
  };
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 1);
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
