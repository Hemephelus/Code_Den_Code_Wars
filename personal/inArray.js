// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function solution1(array1, array2) {
 return array1.filter((word) => {
     const regex = new RegExp(`${word}`);
    let match
    for(let i = 0; i < array2.length; i++){
      match = regex.exec(array2[i]);
      if(match !== null){
       break
      }
    }
    if(match === null){
      return false
    }else{
        return true
      }
    }).sort()
}


function solution2(array1, array2) {
 return array1
 .filter(a1 => array2.find(a2 => a2.match(a1)))
 .sort()

}

// SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [
      ["xyz", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ],
    expected_result: ["live", "strong"],
  },
  {
    input: [
      ["live", "strong", "arp"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ],
    expected_result: ["arp", "live", "strong"],
  },
  {
    input: [
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ],
    expected_result: [],
  },
];

let tester = test([solution1,solution2], 2, inputs, 2);
console.log(tester.actual_result);
console.log(tester.expected_result);

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
      actual_result: funcs[i](...inputs[inputsIndex].input),
      expected_result: inputs[inputsIndex].expected_result,
    };
  }

  return {
    ...results[funcIndex],
  };
}
