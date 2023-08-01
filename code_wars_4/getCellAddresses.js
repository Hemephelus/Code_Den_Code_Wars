// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/62c376ce1019024820580309/solutions/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: ["A1:A10"],
    expected_result: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
    ],
  },
  {
    input: ["A1:Z1"],
    expected_result: [
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
      "F1",
      "G1",
      "H1",
      "I1",
      "J1",
      "K1",
      "L1",
      "M1",
      "N1",
      "O1",
      "P1",
      "Q1",
      "R1",
      "S1",
      "T1",
      "U1",
      "V1",
      "W1",
      "X1",
      "Y1",
      "Z1",
    ],
  },
  {
    input: ["F12:J17"],
    expected_result: [
      "F12",
      "G12",
      "H12",
      "I12",
      "J12",
      "F13",
      "G13",
      "H13",
      "I13",
      "J13",
      "F14",
      "G14",
      "H14",
      "I14",
      "J14",
      "F15",
      "G15",
      "H15",
      "I15",
      "J15",
      "F16",
      "G16",
      "H16",
      "I16",
      "J16",
      "F17",
      "G17",
      "H17",
      "I17",
      "J17",
    ],
  },
  {
    input: ["H7:F3"],
    expected_result: [],
  },
  {
    input: ["A1:A10"],
    expected_result: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
    ],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function solution1(range) {
  // split the input
  // handle invalid ranges
  //   loop from A to Z
  // etrct
  let arrRange = range.split(":");


  if (arrRange[0] === arrRange[1]) return [];

  // if(arrRange[0][1]>arrRange[1][1] || )return []
  let arrNumber = generateNumber(
    +arrRange[0].substring(1),
    +arrRange[1].substring(1)
  );

  let arrLetter = generateLetter(arrRange[0][0], arrRange[1][0]);
  if (arrLetter.length === 0 || arrNumber.length === 0) return [];

  function generateLetter(start, end) {
    let arr = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }

  function generateNumber(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

  console.log(arrNumber);
  let finalArr = [];

  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrLetter.length; j++) {
        finalArr.push(arrLetter[j]+arrNumber[i])
    }
  }

  return finalArr;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 4);
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
