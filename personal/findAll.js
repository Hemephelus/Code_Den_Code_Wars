// URL
// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [[6, 9, 3, 4, 3, 82, 11], 3], expected_result: [2, 4] },
  {
    input: [[10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16],
    expected_result: [1, 9],
  },
  {
    input: [
      [
        20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15,
        5,
      ],
      20,
    ],
    expected_result: [0, 1, 8],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(array, n) {
  return array.reduce((prev, curr, index) => {
    if (curr === n) {
      prev.push(index);
      return prev;
    } else {
      return prev;
    }
  }, []);
}

function solution2(array, n){
    return array.reduce((prev, curr, index) => curr === n?[...prev,index]: prev, []);
}
function solution3(array, n){
    let a = []; array.forEach((v,i)=>{if(v===n){a.push(i)}})
    return a
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1,solution2,solution3], 2, inputs, 3);
console.log(tester);

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
