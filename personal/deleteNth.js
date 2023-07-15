// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function solution1(arr, n) {
    let count = {};
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) {
        count[arr[i]] = 0;
        }

        if (count[arr[i]] < n) {
        newArr.push(arr[i]);
        }

        count[arr[i]] += 1;
    }
    return newArr;
}

function solution2(arr,x){
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
    //   console.log((cache[n]||0)+1)
      return cache[n] <= x;
    });
}

// SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [[20, 37, 20, 21], 1],
    expected_result: [20, 37, 21],
  },
  {
    input: [[1, 1, 3, 3, 7, 2, 2, 2, 2], 3],
    expected_result: [1, 1, 3, 3, 7, 2, 2, 2],
  },
  {
    input: [[1, 2, 3, 1, 2, 1, 2, 3], 2],
    expected_result: [1, 2, 3, 1, 2, 3],
  },
];

let tester = test([solution1,solution2], 2, inputs, 3);
console.log(tester.actual_result);
console.log(tester.expected_result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
