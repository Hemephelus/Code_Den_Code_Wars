// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function solution1(url){
    //your code here
  
        const regex = /(https?:\/\/)?(www\.)?(.+?)\.(.+)/;
        const match = regex.exec(url);
        if (match) {
          return match[3];
        } else {
          return null;
        }
      
  }



   // SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: "http://google.com", expected_result: "google" },
    { input: "http://google.co.jp", expected_result: "google" },
    { input: "www.xakep.ru", expected_result: "xakep" },
    { input: "https://youtube.com", expected_result: "youtube" },
];

let tester = test([solution1], 1, inputs, 4);
console.log(tester);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
      actual_result: funcs[i](inputs[inputsIndex].input),
      expected_result: inputs[inputsIndex].expected_result,
    };
  }

  return results[funcIndex]
 
}
