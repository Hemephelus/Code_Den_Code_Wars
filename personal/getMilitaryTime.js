// https://www.codewars.com/kata/57729a09914da60e17000329/train/javascript


function solution1(input){
    let hour = input.slice(0,2)
    let modHour = +hour%12
    if(input.match('PM')){
     return`${modHour + 12}${input.substring(2).replace('PM','')}`
    }

    if(input.match('AM')){
     return`${modHour<10?'0':''}${modHour}${input.substring(2).replace('AM','')}`
    }
    
}


function solution2(input){
 return input.replace(/^\d\d/, val => `${val % 12 + /PM$/.test(input) * 12}`.padStart(2, 0)).slice(0, -2);
    
}







// SEE RESULTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
    {
      input: ['07:05:45PM'],
      expected_result: '19:05:45',
    },
    {
      input: ['12:00:01AM'],
      expected_result: '00:00:01',
    },
    {
      input: ['11:46:47PM'],
      expected_result: '23:46:47',
    },
  ];
  
  let tester = test([solution1,solution2], 2, inputs, 2);
  console.log(tester.actual_result);
  console.log(tester.expected_result);
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  