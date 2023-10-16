// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [{ input: [""], expected_result: "" }];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

// function append(listA, listB) {

//     if (!listA) return listB;
//     if (!listB) return listA;

//     let myList = listA;
//     // myList => 1 -> 2 -> 3 -> null

//     while (myList.next ) {
//       // myList => 1 -> 2 -> 3 -> null
//       // myList => null
//       myList = myList.next;
//     }
//     // myList => null
//   myList.next = listB;
// //   listB => myList => null =>  4 -> 5 -> 6 -> null
//   return listA;
// }

function append(listA, listB) {
  //     // listA => 1 -> 2 -> 3 -> null
  //     // listB => 4 -> 5 -> 6 -> null
  let head = new Node(null, null);
  // head -> (null, next:(1...3,next: 4 -> 5 -> 6 -> null))
  let p = head;
  // p -> (null, null)
  // p -> (null, next: null)


  p.next = listA;
  // p -> (null, next: 1 -> 2 -> 3 -> null)
  // p -> (null, next: ListA)
  // p -> 1 -> 2 -> 3 -> null

  //  listA => 1 -> 2 -> 3 -> null
  while (listA) {
    p.next = listA;
    // p => (3,next: null)
    //  listA =>(1,next:(2,(3,null)))
    listA = listA.next;
    p = p.next;
    //  listA =>(2,next:(3,null))
    //  listA =>(3,next: null)
    // listA => null
  }

  p.next = listB;
  // p => (3,next: 4 -> 5 -> 6 -> null)

  return head.next;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 1);
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
