// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
/**
 * input 63 seconds
 * return '1 minute and 3 seconds'
 * return '1 year and 3 minutes'
 * not => '1 minute 3 seconds'
 * input 60 seconds
 * return '1 minute'
 * not => '1 minute 0 seconds'
 * input 3662 seconds
 * return '1 hour, 1 minute and 2 seconds'
 * not => '1 minute, 1 hour and 2 seconds '
 * not => '1 minute 3 seconds'
 * years, days, hours, minutes, and seconds
 * 0 seconds return 'now'
 */

// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
//

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: [1], expected_result: "1 second" },
  { input: [0], expected_result: "now" },
  { input: [62], expected_result: "1 minute and 2 seconds" },
  { input: [120], expected_result: "2 minutes" },
  { input: [3600], expected_result: "1 hour" },
  { input: [3600], expected_result: "1 hour" },
  { input: [3662], expected_result: "1 hour, 1 minute and 2 seconds" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(seconds) {
  // years, days, hours, minutes, and seconds
  if (seconds === 0) return "now";

  let toSeconds = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  let a = Object.entries(toSeconds);
  // console.log(a);
  let c = []
  let time = 0;
  console.log(seconds);
  for (let i = 0; i < a.length; i++) {
    let units = a[i][1];
    console.log(seconds,'/',units,a[i][0])
    console.log(seconds/units,a[i][0])
    console.log(seconds, "-", time, "=", seconds - time);
    console.log(seconds - time);
    let b = Math.floor((seconds - time) / units);
    console.log(time);

    // console.log(seconds-time,a[i][1],b,a[i][0])
    /** 
     * seconds = 3600 , time = 0, i = 0
     * (3600-0)/31536000 => 3600/31536000 => 0 => b = 0 year => no show
     * second = 3600 , time = 0, i = 1
     * (3600-0)/31536000 => 3600/86400 => 0 => b = 0 day => no show
     * /////////////////////////////////////////////////////////////
     * 
     * second = 7200 , time = 0, i = 2
     * (7200-0)/3600 => 7200/3600 => 2 => b = 2 hour =>  time = 3600+0 => show
     * second = 7200 , time = 3600, i = 3
     * (7200-3600)/60 => 3600/60 => 60 => b = 60 min =>  time = 60+3600 => show
     * second = 7200 , time = 7200, i = 4
     * (7200-7200)/7200 => 0/7200 => 0 => b = 0 sec => show
     */

    console.log(2 * 3600);
    if (b > 0) {
      console.log(a[i][1]);
      time += a[i][1]*b
        c.push(`${b} ${a[i][0]}${b>1?'s':''}`)
     
    }
  }

  let len = c.length
  if(len > 1){
      c[len-1] = `and ${c[len-1] }`
  }
  
  return c.join(', ').replace(', and',' and')
}
//   Quokka

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tester = test([solution1], 1, inputs, 7);
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
