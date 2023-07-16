// URL
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [1], expected_result: "1 second" },
  { input: [62], expected_result: "1 minute and 2 seconds" },
  { input: [120], expected_result: "2 minutes" },
  { input: [3600], expected_result: "1 hour" },
  { input: [3662], expected_result: "1 hour, 1 minute and 2 seconds" },
  { input: [0], expected_result: "now" },
  { input: [7320960], expected_result: "84 days, 17 hours and 36 minutes" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(seconds) {
  let a = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
    now: 0,
  };

  if (seconds === 0) return `now`;

  let b = Object.entries(a);
  let c = [];
  let time = 0;
  for (let i = 0; i < b.length; i++) {
    let x = Math.floor((seconds - time) / b[i][1]);

    if (Math.floor(x) !== 0 && !isNaN(x)) {
      time += Math.floor(x) * b[i][1];
      c.push(`${x} ${b[i][0]}${x > 1 ? "s" : ""}`);
    }
  }
  let len = c.length;

  c[len - 1] = `and ${c[len - 1]}`;

  if (c.length > 1) {
    return c.join(", ").replace(", and", " and");
  }

  return c.join(", ").replace("and", "").trim();
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 7);
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
