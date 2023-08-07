// URL
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[], 1], expected_result: 0 },
    { input: [[1,2,3,4], 1], expected_result: 10 },
    { input: [[2,2,3,3,4,4], 2], expected_result: 9 },
    { input: [[1,2,3,4,5], 100], expected_result: 5  },
    { input: [[5,3,4],    1], expected_result: 12  },
    { input: [[10,2,3,3], 2], expected_result: 10  },
    { input: [[2,3,10,2], 2], expected_result: 12  },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(customers, n){
    
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
  