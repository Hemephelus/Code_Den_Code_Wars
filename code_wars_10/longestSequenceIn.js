//Find the length of longest subsequence of same incrementing values
// function longestSequenceIn(string) {
//   //Todo
//     const arr = string.split(' ')
//     console.log(arr);

//     let num  = 0
//     let sequence = []

//     function getSequence(seq_arr){
//         for(let i = 0; i < seq_arr.length; i++){
//             let diff = Number(seq_arr[i+1]) - Number(seq_arr[i])
//             if(num === 0){
//                 num = diff
//                 getSequence(arr)
//             }else if(num === diff ){
//                 sequence.push(seq_arr[i])
//                 arr.shift()
//             } else {

//                 getSequence(arr)
//                 return
//             }
//         }

//     }

//     getSequence(arr)

//     console.log(sequence);

// }

function longestSequenceIn(string) {
  //Todo
  const arr = string.split(" ");
  console.log(arr);

  if (string === "") return 0;
  if (arr.length === 1) return 1;

  let diff_arr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = +arr[i + 1] - +arr[i];
    diff_arr.push(diff);
  }

  console.log(diff_arr);

  let count = 1;
  let maxCount = 0;

  for (let i = 0; i < diff_arr.length; i++) {
    if (diff_arr[i] === diff_arr[i + 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }
  console.log(maxCount);

  return maxCount + 1;
}

console.log(longestSequenceIn("1 3 9 15 21 7 8 2 3 4"));
// console.log(longestSequenceIn("11"));
// console.log(longestSequenceIn("7 8 9 2 5 8 11"));
// console.log(longestSequenceIn("1 3 9"));
// console.log(longestSequenceIn("10 11 12"));
