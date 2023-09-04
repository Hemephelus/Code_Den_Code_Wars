// URL
// https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[0, 4, 6, 8, 8, 8, 5, 5, 7]], expected_result: 2 },
    { input: [ [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]], expected_result: 3 },
    { input: [ [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]], expected_result: 13 },
    { input: [ [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]], expected_result: 5 },
    { input: [[9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9]], expected_result: 3 },
    { input: [[5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7]], expected_result: 3 },
    { input: [[5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1]], expected_result: 2 },
    { input: [[7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3]], expected_result: 3 },
    { input: [[6, 0, 5, 9, 5, 0, 0, 2, 5, 0]], expected_result: 3 },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(input){
    
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
  