// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [	["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]], expected_result: ["WEST"] },
    { input: [["NORTH", "WEST", "SOUTH", "EAST"]], expected_result: ["NORTH", "WEST", "SOUTH", "EAST"] },
    { input: [["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]], expected_result: [] },
    { input: [["NORTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH", "SOUTH", "NORTH","WEST", "EAST"]], expected_result:  ["NORTH", "NORTH"] },
    { input: [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]], expected_result:  [] },
    { input: [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]], expected_result:  ["NORTH"] },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(arr){
    // ...
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
  