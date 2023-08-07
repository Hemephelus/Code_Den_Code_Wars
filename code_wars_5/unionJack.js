// URL
// https://www.codewars.com/kata/5620281f0eeee479cd000020/train/javascript 

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [7], expected_result: 'X--X--X\n-X-X-X-\n--XXX--\nXXXXXXX\n--XXX--\n-X-X-X-\nX--X--X' },
    { input: [1], expected_result: 'X--X--X\n-X-X-X-\n--XXX--\nXXXXXXX\n--XXX--\n-X-X-X-\nX--X--X' },
    { input: [8], expected_result: 'X--XX--X\n-X-XX-X-\n--XXXX--\nXXXXXXXX\nXXXXXXXX\n--XXXX--\n-X-XX-X-\nX--XX--X' },
    { input: ['string'], expected_result: false },
    { input: [10], expected_result: 'X---XX---X\n-X--XX--X-\n--X-XX-X--\n---XXXX---\nXXXXXXXXXX\nXXXXXXXXXX\n---XXXX---\n--X-XX-X--\n    -X--XX--X-\nX---XX---X' },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(x){
    
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
  