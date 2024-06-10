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
        let upperLetter = letter.toUpperCase();
        // lookup the upper case letter in our obj
        // transform our result back to lower case
        out += key[upperLetter] ? key[upperLetter].toLowerCase() : letter;
      } else {
        // lookup the upper case letter in our obj
        // console.log(letter);
        // console.log(key[letter]);
        out += key[letter] ? key[letter] : letter;
      }
    }
    console.log(out);
    return out;
  }

  function decode(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      let letter = str[i]; //A
      // console.log(isLower('a'));
      if (isLower(letter)) {
        // transform the letter upper
        let upperLetter = letter.toUpperCase();
        // lookup the upper case letter in our obj
        // transform our result back to lower case
        out += key[upperLetter].toLowerCase() || letter;
      } else {
        // lookup the upper case letter in our obj
        // console.log(letter);
        // console.log(key[letter]);
        out += key[letter] || letter;
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
  const rule = "GA-DE-RY-PO-LU-KI".split("-");
  const code = [...rule, ...rule.map((x) => x.toLowerCase())];
  console.log(code);
  const swapToObj = (acc, curr) => {
    return (acc[curr[0]] = curr[1]), (acc[curr[1]] = curr[0]), acc;
  };
  
  const cypher = (code) => (str) => str.replace(/./g, (x) => code[x] || x);
  
  const encode = cypher(code.reduce(swapToObj, {}));
  console.log(encode('lol'));
  const decode = encode;
}

function solution3(str) {
  let abc = "GADERYPOLUKIgaderypoluki";
  return str
    .split("")
    .map((v) => {
      let x = abc.indexOf(v); // 0 or 1
      return x === -1 ? v : x % 2 ? abc[x - 1] : abc[x + 1];
    })
    .join("");
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test(
  [solution1, solution2, solution3],
  2,
  inputs,
  1
);
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
