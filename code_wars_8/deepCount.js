// URL
// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [[]], expected_result: 0 },
  { input: [[1, 2, 3]], expected_result: 3 },
  { input: [["x", "y", ["z"]]], expected_result: 4 },
  { input: [[1, 2, [3, 4, [5]]]], expected_result: 7 },
  { input: [[[[[[[[[[]]]]]]]]]], expected_result: 8 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(a) {
  let count = 0
  function deepCount(arr){

    for(let i = 0; i < arr.length; i++){
      let elem = arr[i]
      count++
      if(Array.isArray(elem)){
        deepCount(elem)
      }
    }
    return count

  }
  return deepCount(a, count)

}

function deepCount(a) {
  if (a.length == 0) return 0;
  let count = 0;
  const countDeep = (arr) => {
    arr.map((el) => {
      if (!Array.isArray(el)) count++;
      else {
        count++;
        countDeep(el);
      }
    });
    return count;
  };

  return countDeep(a);
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1,deepCount], 1, inputs, 5);
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
