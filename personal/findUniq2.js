// URL
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]], expected_result: "BbBb" },
    { input: [[ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]], expected_result: "foo" },
    { input: [[ 'silvia', 'vasili', 'victor' ]], expected_result: "victor" },
    { input: [[ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]], expected_result: "Harry Potter" },
    { input: [[ '    ', 'a', ' ' ]], expected_result: "a" },
];


// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr){
    
    let newArr = []
    
    for(let str of arr){
      str = str.replace(" ", "").trim().split('');
      let lol = new Set()

      for(let s of str){
        lol.add(s.toUpperCase())
      }

      newArr.push([...lol].sort().join(''))
    }
    let unique = newArr.filter(a => newArr.indexOf(a) === newArr.lastIndexOf(a))[0]
    // console.log(arr)
    let position = newArr.indexOf(unique)

    return arr[position]
  
}

function solution2(arr){
  return arr.sort().filter((e, i, a) => e.match(new RegExp(`[^${a[1]}]`, 'gi')))[0];

}


// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1,solution2], 2, inputs, 1);
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
