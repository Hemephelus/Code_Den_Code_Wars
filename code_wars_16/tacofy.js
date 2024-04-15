// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  {
    input: ["isdoso"],
    expected_result: [
      "shell",
      "beef",
      "salsa",
      "beef",
      "salsa",
      "beef",
      "shell",
    ],
  },
  { input: [""], expected_result: ["shell", "shell"] },
  { input: ["a"], expected_result: ["shell", "beef", "shell"] },
  {
    input: ["ggg"],
    expected_result: ["shell", "guacamole", "guacamole", "guacamole", "shell"],
  },
  {
    input: ["ogl"],
    expected_result: ["shell", "beef", "guacamole", "lettuce", "shell"],
  },
  {
    input: ["ydjkpwqrzto"],
    expected_result: ["shell", "tomato", "beef", "shell"],
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(word) {
  // all vowels (except 'y') = beef

  // t = tomato

  // l = lettuce

  // c = cheese

  // g = guacamole

  // s = salsa

  let ingredients = {
    a: "beef",
    e: "beef",
    i: "beef",
    o: "beef",
    u: "beef",
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa,",
  };

  // check char of word compare with keys in the obj.

  let result = [...word.toLowerCase()]
    .map((a) => {
      return ingredients[a] || "";
    })
    .filter((r) => r !== "");

  result.push("shell");
  result.unshift("shell");
  console.log(result);


  // let result = [];
  // [...word].reduce((a, c) => {
  //   return c in ['a','e','i','o','u'] ? 'beef':
  //         c === 't' ? 'tomato' :
  //         c === 'l' ? 'lettuce':
  //         c === 'c' ? 'cheese':
  //         c === 'g' ? 'guagamole':
  //         c === 's' ? 'salami': (result.push(a), a)
  // }, '');
  // return result;

  return result;
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 6);
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
