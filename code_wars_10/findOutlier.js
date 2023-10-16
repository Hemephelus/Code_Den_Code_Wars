// function findOutlier(integers){
//     //your code here
//     let arrEven = []
//     let arrOdd = []

//     for( let num of integers){
//         if(num % 2 === 0){
//             arrEven.push(num)
//         }else{
//             arrOdd.push(num)
//         }
//     }

//     if (arrEven.length === 1){
//         return arrEven[0]
//     }else{
//         return arrOdd[0]
//     }

//   }


function findOutlier(integers){
    //your code here
    return integers.filter(num => num % 2 === 0).length === 1? integers.filter(num => num % 2 === 0)[0]: integers.filter(num => num % 2 === 1)[0]

  }
  console.log(9 % 2)
  console.log(-9 % 2)
  
  console.log(findOutlier([0,1,2]))