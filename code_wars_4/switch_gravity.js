// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/64c743cb0a2a00002856ff73/train/python

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    { input: [[
        ["-", "#", "#", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"]
      ]], expected_result: [
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "#", "#", "-"]
      ] },
    { input: [[
        ["-", "#", "#", "#", "#", "-"],
        ["#", "-", "-", "#", "#", "-"],
        ["-", "#", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-"]
      ]], expected_result: [
        ["-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["-", "#", "-", "#", "#", "-"],
        ["#", "#", "#", "#", "#", "-"]
      ] },
    { input: [
       [ ["-", "#", "#", "-"],
        ["-", "-", "#", "-"],
        ["-", "-", "-", "-"],]
    ], expected_result:  [
        ["-", "-", "-", "-"],
        ["-", "-", "#", "-"],
        ["-", "#", "#", "-"]
    ] },
  ];
  
  
  // Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function solution1(lst){
    // loop the 2 array 
    // create a new array

    let arr = []
    console.log(lst)
    for(let i = 0; i < lst[0].length;i++){
        let col = lst.map(s => s[i])
        let sortedCol = col.sort((a,b) => a.localeCompare(b))
        arr.push(sortedCol)
    }

    let newArr = []
    for(let i = 0; i < arr[0].length;i++){
        let col = arr.map(s => s[i])
        newArr.push(col)
    }


    return newArr
  }
  
  
  // test result
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let tester = test([solution1], 1, inputs, 3);
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
  