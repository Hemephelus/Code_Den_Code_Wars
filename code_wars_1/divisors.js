function solution1(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
}

// SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: 12, expected_result: [2, 3, 4, 6] },
    { input: 15, expected_result: [3, 5] },
    { input: 13, expected_result: "13 is prime" },
];

let tester = test([solution1], 1, inputs, 3);
console.log(tester);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        actual_result: funcs[i](inputs[inputsIndex].input),
        expected_result: inputs[inputsIndex].expected_result,
      };
    }
  
    return {
      ...results[funcIndex],
    };
  }
