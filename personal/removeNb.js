// URL
//  https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [26], expected_result: [[15,21], [21,15]] },
    { input: [100], expected_result: [] },
];


// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n){
    let nums = []
    let sum = (n*(n+1))/2
    let a, b
    for(let i = 0 ; i < n; i++){
        b= i+1
        let top = sum-b
        let bottom = b+1
        a = top/bottom
        if(a<=n && top%bottom === 0){
            nums.push([b,a])
        }
    }
    return nums
//   return a?[[a,b],[b,a]]:[]
}


// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 2);
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
