// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [{ input: [""], expected_result: "" }];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getNth(node, index) {
  let idx = 0;
  console.log(node);

  while (node) {
    if (idx === index) {
      return node;
    }
    node = node.next;
    idx++;
  }
  if(!node){
      throw new Error("Fake");
  }
}

function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((head, data) => push(head, data), null);
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

let list = buildOneTwoThree();
console.log(
  getNth(list, 0).data,
  1,
  "First node should be located at index 0."
);
console.log(
  getNth(list, 1).data,
  2,
  "Second node should be located at index 1."
);
console.log(
  getNth(list, 2).data,
  3,
  "Third node should be located at index 2."
);

console.log(function () {
  getNth(list, 3);
});
//   console.log("Invalid index value should throw error.", function() {getNth(list, 100)});
//   console.log("Null linked list should throw error.", function() {getNth(null, 0)});

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   let tester = test([solution1], 1, inputs, 1);
//   console.log(tester.actual_result);
//   console.log(tester.expected_result);

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
