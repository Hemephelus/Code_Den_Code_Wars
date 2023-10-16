// function zero(str='') {return Math.floor(eval(`0${str}`))}
// function one(str='') {return Math.floor(eval(`1${str}`))}
// function two(str='') {return Math.floor(eval(`2${str}`))}
// function three(str='') {return Math.floor(eval(`3${str}`))}
// function four(str='') {return Math.floor(eval(`4${str}`))}
// function five(str='') {return Math.floor(eval(`5${str}`))}
// function six(str='') {return Math.floor(eval(`6${str}`))}
// function seven(str='') {return Math.floor(eval(`7${str}`))}
// function eight(str='') {return Math.floor(eval(`8${str}`))}
// function nine(str='') {return Math.floor(eval(`9${str}`))}

// function plus(val) {return '+'+val}
// function minus(val) {return '-'+val}
// function times(val) {return '*'+val}
// function dividedBy(val) {return '/'+val}

const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

console.log(2.11^4);

console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ())), 13);
console.log(eight(minus    (three())),  5);
console.log(seven  (dividedBy(two  ())),  3);


// next querstion https://www.codewars.com/kata/5a05a4d206d5b61ba70000f9/train/python