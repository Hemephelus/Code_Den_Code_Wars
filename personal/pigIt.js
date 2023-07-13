// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function solution1(str){
    //Code here
    return   str.split(' ').map((word) =>{
        if( /^[A-Za-z]*$/.test(word)){
            return `${word.substring(1)}${word[0]}ay`
        }else{
            return word
        }
    }).join(' ')
  }

function solution2(str){
    //Code here
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }


  // SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: "Pig latin is cool", expected_result: "igPay atinlay siay oolcay" },
    { input: "This is my string", expected_result: "hisTay siay ymay tringsay" },
    { input: "Hello world !", expected_result: "elloHay orldway !" },
];

let tester = test([solution1,solution2], 2, inputs, 3);
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
