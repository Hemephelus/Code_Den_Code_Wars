// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["test"], expected_result: "grfg" },
  { input: ["Test"], expected_result: "Grfg" },
  { input: ["aA bB zZ 1234 *!?%"], expected_result: "nN oO mM 1234 *!?%" },
  { input: ["a"], expected_result: "n" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(38%26);
function solution1(message) {
  console.log(message);
  str = "";
  let regex = /[A-Za-z]/g;
  // 0 1 2 3 4  .            12 13 ...                24 25 38
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
//  65 66 67 ....            77                        89 90
  console.log("c".charCodeAt());
  console.log("m".charCodeAt());
  for (let letter of message) {
    let letterCode = letter.charCodeAt();
    // console.log(regex.test(letter));
    if (regex.test(letter)) {
      console.log(letter);
      if (letterCode > "m".charCodeAt()) {
        letterCode -= 13;
      } else {
        letterCode += 13;
      }
    }

    str += String.fromCharCode(letterCode);
  }

  console.log(str);

  return str;
}
function solution1(message) {
  console.log(message);
  str = "";

  for (let letter of message) {
    let letterCode = letter.charCodeAt();

    // upper case
    if (letterCode >= 65 && letterCode <= 90) {
      letterCode = ((letterCode - 65 + 13) % 26) + 65;
    }
    
    // lower case
    if (letterCode >= 97 && letterCode <= 122) {
      letterCode = ((letterCode - 97 + 13) % 26) + 97;
    }

    str += String.fromCharCode(letterCode);
  }

  console.log(str);

  return str;
}

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 3);
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
