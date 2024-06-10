// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// 

//return what ? thinking and testing...
// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    //Ookokokk?
    { input: [0], expected_result: 0 },
    { input: [1], expected_result: 1 },
    //return n-1 ?
    { input: [2], expected_result: 1 },
    { input: [3], expected_result: 2 },
    //return Math.round(n/3) ?
    { input: [4], expected_result: 1 },
    { input: [5], expected_result: 2 },
    { input: [6], expected_result: 2 },
    { input: [7], expected_result: 3 },
    //All of the above answers are wrong 
    { input: [8], expected_result: 1 },
    { input: [9], expected_result: 2 },
    { input: [10], expected_result: 2 },
    { input: [100], expected_result: 3 },
    { input: [1000], expected_result: 6 },
    { input: [10000], expected_result: 5 },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(n){
    return n.toString(2).replaceAll('0','').length;
  }
  
  
  // test result
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let [tester, numberOfInputs] = test([solution1], 1, inputs, 13);
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
  