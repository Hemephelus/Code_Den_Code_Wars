// URL
// https://www.codewars.com/kata/5b7bd90ef643c4df7400015d/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["abba"], expected_result: true },
  { input: ["abaazaba"], expected_result: false },
  { input: ["abccba"], expected_result: true },
  { input: ["adfa"], expected_result: true },
  { input: ["ae"], expected_result: false },
  { input: ["abzy"], expected_result: false },
  { input: ["ababbaba"], expected_result: true },
  { input: ["sq"], expected_result: true },
  {
    input: [
      "kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm",
    ],
    expected_result: true,
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(s) {
  // ad || fe

  for (let i = 0; i < s.length / 2; i++) {
    let [letterBefore, letterAfter] = getNeighborLetters(s[i]); //a => [b,b]
    let otherHalf = getNeighborLetters(s[s.length - (i + 1)]); // e => [d,f]

    console.log(otherHalf);
    if (otherHalf.includes(letterBefore) || otherHalf.includes(letterAfter)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function getNeighborLetters(str) {
  // c => [b,d]
  // a=> [b,b]
  // z => [y,y]
  str = str.toLowerCase();
  if (str === "a") return ["b", "b"];
  if (str === "z") return ["y", "y"];

  let letterBefore = String.fromCharCode(str.charCodeAt(0) - 1);
  let letterAfter = String.fromCharCode(str.charCodeAt(0) + 1);
  return [letterBefore, letterAfter];
}

function solution2(s) {
  for (var i = 0; i < Math.floor(s.length / 2); ++i)
    if (
      s[i].charCodeAt() + 1 != s[s.length - 1 - i].charCodeAt() + 1 &&
      s[i].charCodeAt() - 1 != s[s.length - 1 - i].charCodeAt() + 1 &&
      s[i].charCodeAt() + 1 != s[s.length - 1 - i].charCodeAt() - 1 &&
      s[i].charCodeAt() - 1 != s[s.length - 1 - i].charCodeAt() - 1
    )
      return false;
  return true;
}

const solution3 = (s) =>
  [...s.slice(0, s.length / 2)].every((val, idx) =>
    [-2, 0, 2].includes(val.charCodeAt() - s[s.length - idx - 1].charCodeAt())
  );

/**
 * adfa
 * a => [b]
 * d => [c,e] => [b,b] => [bc,be]
 * f => [e,g] => [bc,be, bc,be] => [bce,bee,bcg,beg]
 * a => [b] => [bce,bee,bcg,beg] => [bceb, beeb, bcgb,begb]
 */

/**
 * abba
 * a => [b]
 * b => [f,g]
 * b => [a,c]
 * a => [b]
 */

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2, solution3], 3, inputs, 1);
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
