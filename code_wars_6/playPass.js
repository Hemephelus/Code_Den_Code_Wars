// URL
// https://www.codewars.com/kata/559536379512a64472000053/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["BORNY IN 2015!", 1], expected_result: "!4897 Oj oSpC" },
  { input: ["I LOVE YOU!!!", 1], expected_result: "!!!vPz fWpM J" },
  {
    input: ["MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2, 1],
    expected_result: "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO",
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(s, n) {
  // console.log(s, n);
  // console.log(30%26);
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    charCode = s[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      let str = String.fromCharCode((charCode+n-65)%26+65)
      s[i] = i%2===0?str.toUpperCase():str.toLowerCase()
    }

    if(Number.isInteger(+s[i]) && s[i] !== " "){
      s[i] = 9-s[i]
    }
    
  }
  console.log(s);
    return s.reverse().join('')
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 1);
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
