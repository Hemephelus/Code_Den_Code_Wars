// URL
// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [
      [
        ["XXX", 3],
        ["XXXXX", 6],
        ["XXXXXX", 9],
      ],
      4,
    ],
    expected_result: [0, 1, 3],
  },
  {
    input: [
      [
        ["XXX", 1],
        ["XXXXXX", 6],
        ["X", 2],
        ["XXXXXX", 8],
        ["X", 3],
        ["XXX", 1],
      ],
      5,
    ],
    expected_result: [0, 0, 1, 2, 2],
  },
  {
    input: [
      [
        ["X", 1],
        ["XXXXX", 3],
        ["XX", 6],
        ["XXXXXXX", 6],
        ["XXXXXXXX", 4],
        ["XXX", 4],
        ["XX", 8],
        ["XXXXXX", 2],
        ["XXX", 4],
      ],
      1,
    ],
    expected_result: [+0, +0, 1],
  },
  {
    input: [
      [
        ["XX", 2],
        ["XXXX", 6],
        ["XXXXX", 4],
      ],
      0,
    ],
    expected_result: "Game On",
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(x = [], need) {
  if (need === 0) return "Game On";
  // let sum = 0;
  let chairsLeft = need;
  console.log(chairsLeft);
  let chairList = x.reduce((prev, [people, chairs]) => {
    let diff = chairs - people.length;
    // console.log(sum);
    // console.log(people);
    // console.log(people.length);
    // console.log(chairs);
    // console.log(diff);
    // console.log(need);
    if (chairsLeft > 0) {
      if (diff > 0) {
        if (chairsLeft < diff) {
          prev.push(chairsLeft);
        } else {
          prev.push(diff);
          chairsLeft -= diff;
        }
      } else {
        prev.push(0);
      }
    }
    console.log(chairsLeft);
    return prev;
  }, []);
  return chairsLeft > 0 ? "Not enough!" : chairList;
  // console.log(a,chairsLeft);
}

function solution2(x, need) {
  if (need === 0) return "Game On";
  let arr = [];
  let chairSum = 0;
  let chairsLeft
  console.log(x);
  console.log(need);
  for (let i = 0; i < x.length; i++) {
    let [people, chairs] = x[i];
     chairsLeft = need - chairSum;
     let freeChairs = chairs - people.length;
     if (chairSum >= need) {
       //
       break;
      }
      
      if (freeChairs >= 0) {
        if (freeChairs > chairsLeft) {
          arr.push(chairsLeft);
          chairSum += freeChairs;
          chairsLeft = need - chairSum;
        break;
      }
      arr.push(freeChairs);
      chairSum += freeChairs;
    } else {
      arr.push(0);
    }

    console.log(arr);
    
    console.log(people, chairs, freeChairs);
  }
  // console.log(arr, chairsLeft);
  return chairSum < need?'Not enough!':arr;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2], 2, inputs, 1);
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
