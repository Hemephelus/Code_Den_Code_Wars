// URL
// https://www.codewars.com/kata/5a05a4d206d5b61ba70000f9/train/python

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [
      ["45", "30", "50", "1", "45", "30", "50", "1", "45", "30", "50", "1"],
    ],
    expected_result: 1304550,
  },
  { input: [["100", "10", "1"]], expected_result: 100101 },
  { input: [["32", "3"]], expected_result: 323 },
  { input: [["70", "46", "4", "19"]], expected_result: 1944670 },
  { input: [["71", "82", "42", "34", "90"]], expected_result: 3442718290 },
  { input: [["31", "97", "6", "78"]], expected_result: 3167897 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function solution1(a_list) {

//   let minPenalty = Infinity
//   function findLeastPenalty(penalties, arr= []){

//     if(penalties.length === 0) return ''

//     for(let i = 0; i < penalties.length; i++){
//       //
//       let newPenalties = penalties.slice() // [3] => [3]
//       let [removedPenalty] = newPenalties.splice(i,1) // [3], []
//       arr.push(removedPenalty) // [1,2,3]
//       // recursion
//       findLeastPenalty(newPenalties,arr)
//       // after
//       if(a_list.length === arr.length){
//         let finalValue = arr.join('')
//         if(+finalValue <= minPenalty ){
//           minPenalty = finalValue // 123
//         }
//       }
//       arr.pop() //[1,2]
//     }

//     return minPenalty
//   }

//   return findLeastPenalty(a_list)
// }

function solution1(list) {
  const mod = [];

  const mod2 = [];

  for (let i = 0; i < list.length; i++) {
    let copy = [];

    copy.push(list[i]);

    for (let b = 0; b < list.length; b++) {
      if (list[i] != list[b]) {
        copy.push(list[b]);
      }
    }

    mod.push(copy);

    copy = [];
  }

  console.log("mod", mod);

  for (let i = 0; i < mod.length; i++) {
    let copy = [];

    copy.push(mod[i]);

    for (let b = 0; b < mod.length; b++) {
      if (mod[i] != mod[b]) {
        copy.push(mod[b]);
      }
    }

    let sort = [];

    copy.forEach((itm) => {
      sort.push(itm.join(""));
    });

    lesser = sort[0];

    for (let i = 0; i < sort.length; i++) {
      if (sort[i + 1] < lesser) {
        lesser = sort[i + 1];
      }
    }

    console.log("lesser", lesser);
  }

  return lesser;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 6);
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
