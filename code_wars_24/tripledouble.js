// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [451999277333, 41177722899], expected_result: 1 },
  { input: [1222345, 12345], expected_result: 0 },
  { input: [12345, 12345], expected_result: 0 },
  { input: [666789, 12345667], expected_result: 1 },
  { input: [10560002, 100], expected_result: 1 },
  { input: [1112, 122], expected_result: 0 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(num1, num2) {
  console.log(num1, num2);

  const str1 = num1.toString();
  const str2 = num2.toString();

  console.log(str1, str2);

  let left = 0;
  let right = 1;
  let counter = 1;
  let set = new Set();

  while (right < str1.length) {
    while (str1[left] === str1[right]) {
      right++;
      counter++;
    }

    if (counter >= 3) {
      set.add(str1[left]);
    }

    left = right;
    right++;
    counter = 1;
  }

  counter = 1;
  left = 0;
  right = 1;
  counter = 1;
  let set2 = new Set();
  while (right < str2.length) {
    while (str2[left] === str2[right]) {
      right++;
      counter++;
    }

    if (counter >= 2) {
      set2.add(str2[left]);
    }

    left = right;
    right++;
    counter = 1;
  }

  const result = [...set].some((value) => [...set2].includes(value));

  return result ? 1 : 0;
}

function solution2(num1, num2) {
  console.log(num1, num2);

  const str1 = num1.toString();
  const str2 = num2.toString();

  console.log(str1, str2);
  const triple = str1.match(/(.)\1{2}/g).map((num) => num[0]);
  const double = str2.match(/(.)\1{1}/g).map((num) => num[0]);
  console.log(triple);
  console.log(double);

  const result = triple.some((value) => double.includes(value));

  return Number(result);
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1, solution2], 2, inputs, 1);
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
