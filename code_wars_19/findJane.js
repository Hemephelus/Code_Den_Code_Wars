// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [2], expected_result: 0 },
  { input: [3], expected_result: 1 },
  { input: [10], expected_result: 4 },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(n) {
  // console.log(calcCost(1,2,n));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if(i === j) continue
        console.log([i,j],calcCost(i,j,n));
    }
  }


  return 0;
}

function createPermutations(n) {
    let subArray = []
    let memo = {}
  
    const partitions = (listOfNumbers,  subArray, memo) => {
  
      let subArrayCopy = subArray.slice()
      let memoKey = subArrayCopy.sort().join('')
      if (memo[memoKey]) return [[], set]
      memo[memoKey] = 'seen ' + totalNumber
  
      if (totalNumber === targetNumber) return [subArrayCopy, set]
      if (listOfNumbers.length === 0) return [[], set]
      if (totalNumber > targetNumber) return [[], set]
  
      for (let i = 0; i < listOfNumbers.length; i++) {
  
        let num = listOfNumbers[i]
        let tempListOfNumbers = listOfNumbers.slice()
        tempListOfNumbers.splice(i, 1)
        subArray.push(num)
        totalNumber = subArray.reduce((a, b) => a + b)
        let [path, _] = partitions(targetNumber, tempListOfNumbers, totalNumber, set, subArray, memo)
  
        if (path.length > 0) { set.add(path.sort().join(',')) }
        subArray.pop()
      }
      
      return [[], set]
    }
  
    return partitions(targetNumber, listOfNumbers, totalNumber, set, subArray, memo)
  }

function calcCost(i, j, n) {
  return (i + j) % (n + 1);
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 2);
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
