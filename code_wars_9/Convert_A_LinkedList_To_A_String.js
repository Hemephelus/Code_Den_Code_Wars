// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [{ input: [""], expected_result: "" }];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// kelani aliyu
function stringify(list) {
  let result = "";

  while (list) {
    result += `${list.data} -> `;
    list = list.next;
  }
  // console.log(result);
  return result + "null";
}

console.log(
  stringify(new Node(1, new Node(2, new Node(3)))),
  "1 -> 2 -> 3 -> null"
);


// Williams Malachy Solution
function stringify(list) {
  if (list) {
    return `${list.Data} -> ${stringify(list.next)}`;
  }
  return "null";
}

// console.log(
//   stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
//   "0 -> 1 -> 4 -> 9 -> 16 -> null"
// );
// console.log(stringify(null), "null");

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let tester = test([solution1], 1, inputs, 1);
// console.log(tester.actual_result);
// console.log(tester.expected_result);

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
