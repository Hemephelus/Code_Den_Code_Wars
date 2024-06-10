// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

/***
 * Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 *  Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s) =200 + 50 = 250
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
 */

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [[2, 3, 4, 6, 2]], expected_result: 0 },
  { input: [[4, 3, 4, 3, 4]], expected_result: 400 },
  { input: [[2, 4, 4, 5, 4]], expected_result: 450 },
  { input: [[1, 1, 1, 5, 1]], expected_result: 1100 },
  { input: [[5, 1, 3, 4, 1]], expected_result: 250 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(dice) {
  console.log(dice);

  obj = {
    111: 1000,
    666: 600,
    555: 500,
    444: 400,
    333: 300,
    222: 200,
    1: 100,
    5: 50,
  };

  let arr = Array(6)
    .fill()
    .map((a) => ["", 0]);
  console.log(arr);

  for (let i = 0; i < dice.length; i++) {
    let num = dice[i];
    let index = num - 1;
    console.log(num);
    arr[index][0] += num;
    console.log(arr);
    let keyVal = arr[index][0];
    console.log(keyVal);

    if (keyVal.length === 3) {
      arr[index][1] = obj[arr[index][0]];
      arr[index][0] = "";
    } else {
      arr[index][1] += obj[num] ? obj[num] : 0;
    }
    // console.log(arr[num - 1][1]);
  }

  console.log(arr);

  let totalPoint = 0;
  for (let i = 0; i < arr.length; i++) {
    totalPoint += arr[i][1];
  }
  console.log(totalPoint);

  return totalPoint;
}

function solution2(dice) {
  let out = 0;
  console.log(dice);
  for (let j = 2; j <= 6; j++) {
    if (dice.filter((i) => i === j).length > 2) {
      out += j * 100;
    }
  }

  let one = dice.filter((i) => i === 1);
  let five = dice.filter((i) => i === 5);
  if (one.length > 2) out += 1000;
  out += (one.length % 3) * 100;
  out += (five.length % 3) * 50;
  return out;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1, solution2], 2, inputs, 4);
console.log(tester.actual_result);
console.log(tester.expected_result);

console.log(numberOfInputs);

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

  return [
    {
      ...results[funcIndex],
    },
    inputs.length,
  ];
}
