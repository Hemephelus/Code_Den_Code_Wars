function wheatFromChaff(values) {
    // Your Code is Here .. Enjoy !!

    let lastIndex = values.length-1
    for(let i = 0; i < values.length; i++ ){
        if(values[i] > 0){
            for(let j = lastIndex; j > i;j--){
                if(values[j] < 0){
                    console.log(values[i])
                    let tempI = values[i]
                    let tempJ = values[j]
                    values[i] = tempJ
                    values[j] = tempI
                    // values.splice(i,1,values[j])
                    // values.splice(j,1,values[i])
                    lastIndex = j-1
                    break
                }
            }

        }
    }
    return values
}

// function wheatFromChaff(values) {
//   // Your Code is Here .. Enjoy !!
//   let i = 0;
//   let j = values.length - 1;
//   let temp;
//   while (i < j) {

//     if (values[i] > 0 && values[j] < 0) {
//       temp = values[i];
//       values[i] = values[j];
//       values[j] = temp;
//     }

//     if(values[i] < 0) i++
//     if(values[j] > 0) j--
//   }

//   return values;
// }

// console.log(
//   "actual result:",
//   wheatFromChaff([2, -4, 6, -6]),
//   " expected result:",
//   [-6, -4, 6, 2]
// );
console.log(wheatFromChaff([7,-3,-10]), [-10,-3,7])
console.log(wheatFromChaff([7,-8,1,-2]), [-2,-8,1,7])
console.log(wheatFromChaff([8,10,-6,-7,9]), [-7,-6,10,8,9])
console.log(wheatFromChaff([-3,4,-10,2,-6]), [-3,-6,-10,2,4])
console.log(wheatFromChaff([2,-6,-4,1,-8,-2]), [-2,-6,-4,-8,1,2])
