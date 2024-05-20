// URL
// https://www.codewars.com/kata/65f1c009e44a0f0777c9fa06/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const add2 = (n) => n + 2;
const mul7 = (n) => n * 7;
const div2 = (n) => n / 2;
const sub10 = (n) => n - 10;

let inputs = [
  { input: [[1, 5, 87, 45, 8, 8]], expected_result: [1, 5, 87, 45, 8, 8] },
  { input: [[1, add2, 5, add2, mul7, 4, mul7]], expected_result: [3, 49, 28] },
  { input: [[add2]], expected_result: [2] },
  { input: [[]], expected_result: [] },
  { input: [[sub10, mul7,5,3,div2,add2,mul7,sub10]], expected_result: [-70,5,14.5] },
  { input: ["n=>n*2",24,"n=>n/6","n=>n*10",10,26,4,"function sqrt() { [native code] }","n=>n*10",29,"n=>n?10/n:0","function sqrt() { [native code] }",32,27,"n=>n?10/n:0",7,"n=>n*10",23,6,34,"n=>n/6","n=>n-10","function sqrt() { [native code] }","n=>n/6","n=>n*10",34,25,30,34,10,"n=>0",16,29,14,4,"n=>n*2"], expected_result: [ +0, 40, 10, 26, 20, 0.5872202195147035, 32, 0.37037037037037035, 70, 23, 6, +0, 34, 25, 30, 34, +0, 16, 29, 14, 8 ]},
];

console.log(isNaN(Math.sqrt(-9)));

[ +0, 40, 10, 26, 20, 0.5872202195147035, 32, 0.37037037037037035, 70, 23, 6, +0, 34, 25, 30, 34, +0, 16, 29, 14, 8 ]
[ +0, 40, 10, 26, 20, 0.5872202195147035, 32, 0.37037037037037035, 70, 23, 6, NaN, 34, 25, 30, 34, +0, 16, 29, 14, 8 ]


// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr) {
  // check if the area has a string
  let numberIndex = []
  for (let i = 0; i < arr.length; i++) {
    
    if (typeof arr[i] === 'function') {
      numberIndex.push(i-1)
      let prev = arr[i-1] || 0
      let result = arr[i](prev) || 0
      arr[i] = result   
    }
  }

  let newArr = arr.filter((a, index)=> !numberIndex.includes(index))

  return newArr;
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
