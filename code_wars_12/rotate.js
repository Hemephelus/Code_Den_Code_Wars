// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[[1,2,3],[4,5,6],[7,8,9]],'counter-clockwise'], expected_result: [[3,6,9],[2,5,8],[1,4,7]]},
    { input: [[[1,2,3],[4,5,6],[7,8,9]],'clockwise'], expected_result: [[7,4,1],[8,5,2],[9,6,3]]},
    { input: [rotate([[1,2,3],[4,5,6],[7,8,9]], 'counter-clockwise'),'clockwise'], expected_result: [[1,2,3],[4,5,6],[7,8,9]]},
    { input: [rotate(rotate(rotate([[1,2,3],[4,5,6],[7,8,9]], 'clockwise'), 'clockwise'), 'clockwise'),'clockwise'], expected_result: [[1,2,3],[4,5,6],[7,8,9]]},
    { input: [[[1,2,3], [4,5,6], [7,8,9], [10,11,12]],'counter-clockwise'], expected_result: [[3,6,9,12],[2,5,8,11],[1,4,7,10]]},
    { input: [[[1,2,3], [4,5,6], [7,8,9], [10,11,12]],'clockwise'], expected_result: [[10,7,4,1],[11,8,5,2],[12,9,6,3]]},
    { input: [[[1]],'clockwise'], expected_result: [[1]]},
    { input: [[[1,2,3]],'clockwise'], expected_result: [[3],[2],[1]]},
    { input: [[[1,2,3]],'clockwise'], expected_result: [[1],[2],[3]]},
    { input: [rotate([[1,2,3]], 'clockwise'),'clockwise'], expected_result: [[3,2,1]]},
        
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function rotate(){
    
  }
  
test.assert_equals(rotate(rotate(matrix, 'counter-clockwise'), 'clockwise'), [[1,2,3],[4,5,6],[7,8,9]])
test.assert_equals(rotate(rotate(rotate(rotate(matrix, 'clockwise'), 'clockwise'), 'clockwise'), 'clockwise'), [[1,2,3],[4,5,6],[7,8,9]])
  
  // test result
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let tester = test([rotate], 1, inputs, 1);
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
  