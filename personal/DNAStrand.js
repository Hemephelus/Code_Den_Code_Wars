// URL
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: ["AAAA"], expected_result: "TTTT" },
    { input: ["ATTGC"], expected_result: "TAACG" },
    { input: ["GTAT"], expected_result: "CATA" },
];


// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(dna){
  let comp = {
    A:"T",
    T:"A",
    G:"C",
    C:"G",
  }

  return dna.split('').map(d => comp[d]).join('')
}


// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 3);
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
