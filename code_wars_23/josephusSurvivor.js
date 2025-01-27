// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [7, 3], expected_result: 4 },
    { input: [11, 19], expected_result: 10 },
    { input: [1, 300], expected_result: 1 },
    { input: [14, 2], expected_result: 13 },
    { input: [100, 1], expected_result: 100 },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(n,k){
    console.log(n,k);
    
    const arr = Array.from({length:n}, (_,i) => i)
    console.log(arr);
    let x = 0

    while(arr.length > 1){
      x = (x+k-1) % arr.length
      arr.splice(x,1)
      console.log(arr);
    }

    return arr[0]
  }
  
  
  // test result
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let [tester, numberOfInputs] = test([solution1], 1, inputs, 5);
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
  