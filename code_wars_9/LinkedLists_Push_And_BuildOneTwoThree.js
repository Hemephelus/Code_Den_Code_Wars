// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [{ input: [""], expected_result: "" }];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Node(data , next = null) {
  this.data = data;
  this.next = next;
}

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// head = Node {data: 1, next:null}
function push(head, data) {
  return new Node(data, head);
}
// console.log(new Node(1));
// console.log(push(null, 1).data, 1);
// console.log(push(null, 1).next, null);
// console.log(push(new Node(1), 2).data, 2);
// console.log(push(new Node(1), 2).next.data, 1);

function buildOneTwoThree() {
  // Go
  let chained = null;
  console.log(chained);
  chained = push(chained, 3);
  console.log(chained);
  chained = push(chained, 2);
  console.log(chained);
  chained = push(chained, 1);
  console.log(chained);

  return chained;
}

console.log(buildOneTwoThree().next.next.next);
// console.log(buildOneTwoThree().next.data, 2);
// console.log(buildOneTwoThree().next.next.data, 3);
// console.log(buildOneTwoThree().next.next.next, null);


// function push(head, data) {
//     return new Node(data, head);
//   }
  
//   function buildOneTwoThree() {
//     return [3, 2, 1].reduce( (head, data) => push(head, data), null );
//   }
  
//   function Node(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
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
