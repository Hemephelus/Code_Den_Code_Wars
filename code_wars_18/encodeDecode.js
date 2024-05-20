// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["Ala has a cat"], expected_result: "Gug hgs g cgt" },
  { input: ["Gug hgs g cgt"], expected_result: "Ala has a cat" },
  // { input: ["Ala has a cat"], expected_result: "Gug hgs g cgt" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(str) {
  const key = {
    G: "A",
    A: "G",
    D: "E",
    E: "D",
    R: "Y",
    Y: "R",
    P: "O",
    O: "P",
    L: "U",
    U: "L",
    K: "I",
    I: "K",
  };

  function encode(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      let letter = str[i]; //A
      // console.log(isLower('a'));
      if (isLower(letter)) {
        // transform the letter upper
        let upperLetter = letter.toUpperCase()
        // lookup the upper case letter in our obj
        // transform our result back to lower case
        out += key[upperLetter]?key[upperLetter].toLowerCase():letter
      }else{
        // lookup the upper case letter in our obj
        // console.log(letter);
        // console.log(key[letter]);
        out += key[letter]?key[letter]:letter

      }
    }
    console.log(out);
    return out;
  }

  function decode(str) {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      let letter = str[i]; //A
      // console.log(isLower('a'));
      if (isLower(letter)) {
        // transform the letter upper
        let upperLetter = letter.toUpperCase()
        // lookup the upper case letter in our obj
        // transform our result back to lower case
        out += key[upperLetter].toLowerCase()||letter
      }else{
        // lookup the upper case letter in our obj
        // console.log(letter);
        // console.log(key[letter]);
        out += key[letter]||letter

      }
    }
    console.log(out);
    return out;
  }

  function isLower(letter) {
    let code = letter.charCodeAt();
    if (code >= 97 && code <= 122) {
      return true;
    }
    return false;
  }
  return encode(str);
  decode(str);
}

function solution2(str) {
  
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 1);
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
