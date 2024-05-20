// URL
// https://www.codewars.com/kata/525f277c7103571f47000147/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var schedules1 = [
  [
    ["09:00", "11:30"],
    ["13:30", "16:00"],
    ["16:00", "17:30"],
    ["17:45", "19:00"],
  ], //A
  [
    ["09:15", "12:00"],
    ["14:00", "16:30"],
    ["17:00", "17:30"],
  ], //B
  [
    ["11:30", "12:15"],
    ["15:00", "16:30"],
    ["17:45", "19:00"],
  ], //C
];

let schedules2 = [
  [
    ["09:41", "09:57"],
    ["10:03", "10:14"],
    ["10:32", "10:39"],
    ["10:56", "11:17"],
    ["11:23", "11:41"],
    ["11:59", "12:03"],
    ["12:28", "12:45"],
    ["17:19", "17:27"],
    ["18:56", "18:57"],
  ],
  [
    ["09:48", "12:26"],
    ["15:41", "15:59"],
    ["18:50", "18:57"],
  ],
  [
    ["09:37", "11:19"],
    ["11:27", "13:37"],
    ["16:29", "17:41"],
  ],
  [
    ["10:07", "10:39"],
    ["10:41", "11:03"],
    ["12:21", "12:22"],
    ["15:49", "16:11"],
    ["17:29", "17:54"],
  ],
  [
    ["11:21", "12:42"],
    ["12:51", "13:20"],
    ["17:51", "17:53"],
    ["18:07", "18:11"],
  ],
];

let inputs = [
  { input: [schedules1, 60], expected_result: "12:15" },
  { input: [schedules1, 90], expected_result: null },
  { input: [schedules2, 38], expected_result: "13:37" },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution1(schedules, duration) {
  convertMinsToHours();
  let allSchedules = [];
  for (let i = 0; i < schedules.length; i++) {
    for (let j = 0; j < schedules[i].length; j++) {
      allSchedules.push(schedules[i][j]);
    }
  }

  let sortedSchedules = allSchedules.sort(
    (a, b) => convertHoursToMins(a[0]) - convertHoursToMins(b[0])
  );

  console.log(sortedSchedules);
  let end_time, start_time, current_range;
  let totalSchedule = [];

  for (let i = 0; i < sortedSchedules.length; i++) {
    let [isOverLapping, newRange] = checkOverLapping(
      totalSchedule[totalSchedule.length - 1],
      sortedSchedules[i]
    );

    if (isOverLapping) {
      totalSchedule.pop();
      totalSchedule.push(newRange);
    } else {
      totalSchedule.push(newRange);
    }
  }
  console.log(totalSchedule);
  let start_times = totalSchedule.map((a) => a[0]);
  start_times.push("19:00");
  let end_times = totalSchedule.map((a) => a[1]);
  end_times.unshift("09:00");
  console.log(end_times);
  console.log(start_times);
  for (let i = 0; i < totalSchedule.length + 1; i++) {
    end_time = end_times[i];
    start_time = start_times[i];
    let freeTime =
      convertHoursToMins(start_time) - convertHoursToMins(end_time);

    if (freeTime >= duration) {
      return end_time;
    }
  }

  return null;
}

function convertHoursToMins(time = "0") {
  let [h, m] = time.split(":").map((t, index) => {
    if (index === 0) {
      return t * 60;
    } else {
      return +t;
    }
  });
  return h + m;
}
Math.round();
function convertMinsToHours(time = 0) {
  let inH = time / 60;
  let h = `${parseInt(inH)}`.padStart(2, "0");
  let m = `${parseInt((inH - h) * 60)}`.padStart(2, "0");
  return `${h}:${m}`;
}

function checkOverLapping(schedulesA, schedulesB) {
  if (!schedulesB) return [false, [schedulesA[0], schedulesA[1]]];
  if (!schedulesA) return [false, [schedulesB[0], schedulesB[1]]];

  let isOverLapping =
    convertHoursToMins(schedulesA[0]) < convertHoursToMins(schedulesB[0]) &&
    convertHoursToMins(schedulesA[1]) > convertHoursToMins(schedulesB[0]);

  let newRange = [
    convertMinsToHours(
      Math.min(
        convertHoursToMins(schedulesA[0]),
        convertHoursToMins(schedulesB[0])
      )
    ),
    convertMinsToHours(
      Math.max(
        convertHoursToMins(schedulesA[1]),
        convertHoursToMins(schedulesB[1])
      )
    ),
  ];

  if (isOverLapping) {
    console.log(isOverLapping, newRange);
    return [isOverLapping, newRange];
  }
  return [false, [schedulesB[0], schedulesB[1]]];
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1], 1, inputs, 3);
console.log(tester.actual_result);
console.log(tester.expected_result);

/**
 * Test Multiple solutions and input at the same time.
 * @constructor
 * @param {Array} str - An array of functions solutions
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
