// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [0], expected_result: '00:00:00' },
    { input: [59], expected_result: '00:00:59' },
    { input: [59], expected_result: '00:00:59' },
    { input: [60], expected_result: '00:01:00' },
    { input: [90], expected_result: '00:01:30' },
    { input: [3599], expected_result: '00:59:59' },
    { input: [3600], expected_result: '01:00:00' },
    { input: [45296], expected_result: '12:34:56' },
    { input: [86399], expected_result: '23:59:59' },
    { input: [86400], expected_result: '24:00:00' },
    { input: [359999], expected_result: '99:59:59' },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(seconds){
    return '';
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
  