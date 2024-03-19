// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["a"], expected_result: "a" },
  { input: ["stress"], expected_result: "t" },
  { input: ["moonmen"], expected_result: "e" },
  { input: ["moonmeen"], expected_result: "" },
  { input: ["sTreSS"], expected_result: "T" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(s) {
  let unique = [];
  for (let str of s) {
    let a = helper(str, s);
    if (a === 1) {
      unique.push(str);
    }
  }
  
  console.log(unique);
  
  return unique[0] || "";
}

function helper(chr='', str) {
  let counter = 0;
  for (let s of str) {
    if (s.toLowerCase() === chr.toLowerCase()) {
      counter++;
    }
  }
  
  return counter;
}

function solution2(str) {
  let no_case_str = str.toLowerCase()
  for (let s of str) {
    let a = [...no_case_str.matchAll(s.toLowerCase())]
    if (a.length === 1) {
      return s
    }
  }
  return "";
}



// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1, solution2], 2, inputs, 5);
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
