// URL
// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["a", 3, "b"], expected_result: " a " },
  { input: ["abcdefg", 2, " "], expected_result: "abcdefg" },
  { input: ["a", 3], expected_result: " a " },
  { input: ["", 3, "_"], expected_result: "___" },
  { input: ["abc", 10, "_"], expected_result: "____abc___" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(strng, width, fill = " ") {
  let strLen = strng.length;
  if (strLen > width) return strng;

  // if the w is even remove
  // 10-str.length =

  let padnum = width - strLen;

  if (padnum % 2 === 0) {
    return `${fill.repeat(padnum / 2)}${strng}${fill.repeat(padnum / 2)}`;
  } else {
    return `${fill.repeat(padnum / 2 + 1)}${strng}${fill.repeat(padnum / 2)}`;
  }
}

function solution2(strng, width, fill = " ") {
  let strLen = strng.length;
  if (strLen > width) return strng;

  let padnum = width - strLen;
  return `${fill.repeat(Math.round(padnum / 2))}${strng}${fill.repeat(
    padnum / 2
  )}`;
}
function solution3(strng, width, fill = " ") {
    return strng.length > width
    ? strng
    : strng
      .padStart(Math.ceil((width + strng.length) / 2), fill)
      .padEnd(width, fill);

}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2, solution3], 3, inputs, 5);
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
