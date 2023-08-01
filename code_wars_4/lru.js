// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/6329d94bf18e5d0e56bfca77/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [3, [1, 2, 3, 4, 3, 2, 5]], expected_result: [5, 2, 3] },
  { input: [5, []], expected_result: [-1, -1, -1, -1, -1] },
  { input: [4, [1, 1, 1, 2, 2, 3]], expected_result: [1, 2, 3, -1] },
  { input: [4, [5, 4, 3, 2, 3, 5, 2, 6, 7, 8]], expected_result: [8, 6, 7, 2] },
  { input: [1, [5, 4, 3, 3, 4, 10]], expected_result: [10] },
  { input: [3, [1, 1, 1, 1, 1, 1, 1, 1]], expected_result: [1, -1, -1] },
  {
    input: [5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5]],
    expected_result: [5, 4, 3, 7, 6],
  },
  {
    input: [
      15,
      [
        9, 13, 17, 11, 9, 20, 19, 15, 6, 25, 11, 4, 12, 20, 13, 2, 17, 11, 13,
        8, 7, 11, 1, 23, 24, 21, 14, 21, 14, 7, 19, 20,
      ],
    ],
    expected_result: [23, 13, 17, 11, 20, 24, 21, 14, 19, 4, 12, 2, 8, 7, 1 ],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n, referencesList) {
  let set = new Set();
  let arr = Array(n).fill(-1);
  for (let i = 0; i < referencesList.length; i++) {
    if (set.size < n) {
      if (!set.has(referencesList[i])) {
        let pos = arr.indexOf(-1);
        arr[pos] = referencesList[i];
      }else{
        set.delete(referencesList[i])
      }
    } else {
      if (!set.has(referencesList[i])) {
        let tempArr = [...set];
        let pos = arr.indexOf(tempArr[0]);
        arr.splice(pos, 1, referencesList[i]);

        set.delete(tempArr[0]);
      } else {
        set.delete(referencesList[i]);
      }
    }
    set.add(referencesList[i]);
  }

  return arr;
}

function solution2(n, referencesList){
    
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 8);
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
