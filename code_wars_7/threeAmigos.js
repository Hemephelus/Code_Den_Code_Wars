// URL
// https://www.codewars.com/kata/59922d2ab14298db2b00003a/train/javascript 

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]], expected_result: [5,3,5] },
    { input: [[2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]], expected_result: [2,2,2] },
    { input: [[2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]], expected_result: [] },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(numbers){
    
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
  