// URL
// https://www.codewars.com/kata/5a05a4d206d5b61ba70000f9/train/python

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [["45", "30", "50", "1"]],
    expected_result: 1304550,
  },
  { input: [["100", "10", "1"]], expected_result: 100101 },
  { input: [["32", "3"]], expected_result: 323 },
  { input: [["70", "46", "4", "19"]], expected_result: 1944670 },
  { input: [["71", "82", "42", "34", "90"]], expected_result: 3442718290 },
  { input: [["31", "97", "6", "78"]], expected_result: 3167897 },
  { input: [["72", "7", "7", "78", "79", "709", "94"]],
  expected_result: 7097277787994,
},
{ input: [[ '59', '37', '3' ]], expected_result: 33759 },
{ input: [[  '30', '9',  '81', '78','63', '36', '38', '42','10','34', '40','8', '92']], expected_result: 0 },
// { input: [[  '30', '9',  '81', '78','63', '36', '38', '42','10', '34', '40', '8','92', '42', '27' ]], expected_result: 0 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(a_list) {
   
  let minPenalty = Infinity;
  function findLeastPenalty(penalties, arr = [], memo = [], dept = 0) {
    if (penalties.length === 0) return "";

    penalties.sort((a, b) => +a - +b);
    // penalties.sort((a, b) => +b - +a);
    let memoValue = dept + arr.join("");

    if (arr.length !== 0) {
      if (memo.indexOf(memoValue) !== -1) return "";
      memo.push(memoValue);
      if (stopSearch(memo, dept)) return "";
    }

    for (let i = 0; i < penalties.length; i++) {
      //

      let newPenalties = penalties.slice(); // [3] => [3]
      let [removedPenalty] = newPenalties.splice(i, 1); // [3], []
      arr.push(removedPenalty); // [1,2,3]

      // recursion
      findLeastPenalty(newPenalties, arr, memo, dept + 1);
      // after
      if (a_list.length === arr.length) {
        let finalValue = arr.join("");
        if (+finalValue <= minPenalty) {
          console.log(finalValue);
          minPenalty = finalValue; // 123
        }
      }
      arr.pop();
    }

    return minPenalty;
  }

  return findLeastPenalty(a_list);
}

function stopSearch(memo, dept) {
  let l = memo.length;
  if (l < 2 || dept < 2) return false;

  let fMemo = memo.filter((m) => +m[0] === dept);
  let fl = fMemo.length;
  if (fl < 2) return false;
  let first = fMemo[fl - 2].slice(1);
  let second = fMemo[fl - 1].slice(1);
  if (first <= second && (first.length === second.length)) {
    let pos = memo.indexOf(fMemo[fl - 1]);
    memo.splice(pos, 1);
    return true;
  }

  let pos = memo.indexOf(fMemo[fl - 2]);
  memo.splice(pos, 1);
  return false;
}

function solution2(a_list){
  return a_list.sort(
    (a, b) => {
      console.log(a);
      console.log(b);
      console.log(a + b , b + a );
      return a + b > b + a ? 9 : -9
    }
    )//.join('');
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1, solution2], 2, inputs, 2);
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
