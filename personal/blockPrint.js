// URL
// https://www.codewars.com/kata/6375587af84854823ccd0e90/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: ["abcdefghijklmnopqrstuvwxyz"], expected_result: "" },
    { input: ["heLLo WorLD"], expected_result: "H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nHHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D\nH   H E     L     L     O   O       W W W O   O R R   L     D   D\nH   H E     L     L     O   O       W W W O   O R  R  L     D   D\nH   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD" },
    { input: ["   same"], expected_result: " SSS   AAA  M   M EEEEE\nS   S A   A MM MM E\nS     A   A M M M E\n SSS  AAAAA M   M EEEEE\n    S A   A M   M E\nS   S A   A M   M E\n SSS  A   A M   M EEEEE" },
    { input: ["same   "], expected_result: " SSS   AAA  M   M EEEEE\nS   S A   A MM MM E\nS     A   A M M M E\n SSS  AAAAA M   M EEEEE\n    S A   A M   M E\nS   S A   A M   M E\n SSS  A   A M   M EEEEE" },
    { input: ["   but   different   "], expected_result: "BBBB  U   U TTTTT                   DDDD  IIIII FFFFF FFFFF EEEEE RRRR  EEEEE N   N TTTTT\nB   B U   U   T                     D   D   I   F     F     E     R   R E     NN  N   T\nB   B U   U   T                     D   D   I   F     F     E     R   R E     N   N   T\nBBBB  U   U   T                     D   D   I   FFFFF FFFFF EEEEE RRRR  EEEEE N N N   T\nB   B U   U   T                     D   D   I   F     F     E     R R   E     N   N   T\nB   B U   U   T                     D   D   I   F     F     E     R  R  E     N  NN   T\nBBBB   UUU    T                     DDDD  IIIII F     F     EEEEE R   R EEEEE N   N   T" },
    { input: ["   "], expected_result: "" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(input) {
  let alphabets = {
    A: 15621670449,
    B: 32801506878,
    C: 15620129326,
    D: 32801080894,
    E: 33840677407,
    F: 33840677392,
    G: 15620359726,
    H: 18842895921,
    I: 33424543903,
    J: 33320633391,
    K: 18879369809,
    L: 17734058527,
    M: 19182175793,
    N: 19111003761,
    O: 15621211694,
    P: 32801505808,
    Q: 15621215855,
    R: 32801509969,
    S: 15620048430,
    T: 33424543876,
    U: 18842437166,
    V: 18842436932,
    W: 18842572458,
    X: 18834663985,
    Y: 18834657412,
    Z: 33321787935,
    " ":0,
  };

const pattern = /^\s+|\s*$/;

input = input.replace(pattern, '');
if(input==='')return''
  let str = ''
  let h = 7
  let w = 5
  for (let i = 0; i < h; i++) {
    let line = ''
    for (let j = 0; j < input.length; j++) {
        let upText = input[j].toUpperCase()
      let num = alphabets[upText];
      let biNum = num.toString(2);
      biNum = biNum.length < (w*h) ? "0".repeat((w*h) - biNum.length) + biNum : biNum;
    let letters = biNum
    .slice(i*w,(i+1)*w)
    .replaceAll(1,upText)
    .replaceAll(0," ")

    line = line+' '+letters
}
    str = str+line+'\n'
}

return str
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 2);
console.log(tester.expected_result);
console.log(tester.actual_result);
console.log(tester.expected_result===tester.expected_result);
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
