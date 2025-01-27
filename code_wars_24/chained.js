// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[f1, f2, f3], 0], expected_result: 4 },
    { input: [[f1, f2, f3], 2], expected_result: 36 },
    { input: [[f3, f2, f1], 2], expected_result: 12 },
    { input: [[f4, f5, f6], "lorem ipsum"], expected_result:  "merol_muspi" },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function f1(x) { return x * 2 }
  function f2(x) { return x + 2 }
  function f3(x) { return Math.pow(x, 2) }

  function f4(x) { return x.split("").concat().reverse().join("").split(" ") }
  function f5(xs) { return xs.concat().reverse() }
  function f6(xs) { return xs.join("_") }

  function solution1(functions){
    return function(x) {
        let result = x
        for(let func of functions){
            result = func(result)            
        }
        return result
    };
  }
  
  
  // test result
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let [tester, numberOfInputs] = test([solution1], 1, inputs, 4);
  console.log(tester.actual_result("lorem ipsum"));
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
  