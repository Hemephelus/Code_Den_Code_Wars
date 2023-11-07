// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]],
    expected_result: ["WEST"],
  },
  {
    input: [["NORTH", "WEST", "SOUTH", "EAST"]],
    expected_result: ["NORTH", "WEST", "SOUTH", "EAST"],
  },
  {
    input: [["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]],
    expected_result: [],
  },
  {
    input: [
      [
        "NORTH",
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH",
        "NORTH",
        // "SOUTH",
        // "NORTH",
        // "WEST",
        // "EAST",
      ],
    ],
    expected_result: ["NORTH", "NORTH"],
  },
  {
    input: [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]],
    expected_result: [],
  },
  {
    input: [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"]],
    expected_result: ["NORTH"],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(arr) {
  // peak track of the redundant moves
  // count the frequency of a direction
  // obj = {
  //   "SOUTH":"NORTH",
  //   "NORTH":"SOUTH",
  //   "EAST":"WEST",
  //   "WEST":"EAST",
  // }
  obj = {
    SOUTH: "NORTH",
    NORTH: "NORTH",
    EAST: "WEST",
    WEST: "WEST",
  };
  // let newArr = [obj[arr[0]]]

  // for(let i = 0; i < arr; i++){

  // }

  //   let a = ['S', 'S', 'S', 'S', 'S', 'E', 'N'] //
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] == 'S') {
  //     a[i] = -2

  //   }
  //   if(a[i] == 'W') {
  //     a[i] = -2
  //   }
  // }
  // console.log(a)

  console.log(arr);
}

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

function dirReduc(arr){
  const dir = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length-1] === dir[arr[i]]) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }
  return stack
}

function solution2(arr) { 
  // peak track of the redundant moves
  // count the frequency of a direction
  console.log(arr);
  let obj = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  let newArr;

  while (true) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
      // arr => [ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH' ] => 1
      // arr => [SOUTH, NORTH, NORTH ]  => 2
      // arr => [ NORTH ]  => 3

      let first = arr[i]; // NORTH
      let second = arr[i + 1]; // UNDEFINED

        // NORTH === "UNDEFINED" ==> FALSE
      if (first === obj[second]) {
        i++;
        continue;
      } else {
        newArr.push(first);
      }
      // newArr = [SOUTH, NORTH, NORTH ]  => 1
      // newArr = [NORTH]  => 2
      // newArr = [NORTH]  => 3
    }

    if (arr.length === newArr.length) break;
    arr = newArr;
  }
  return newArr;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1, solution2], 2, inputs, 6);
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
