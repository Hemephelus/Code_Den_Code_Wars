function solution1(integer) {
    let arr = []
    for(let i = 2; i < integer;i++){
        if(integer%i === 0){
            arr.push(i)
        }
    }    
    return arr.length === 0?`${integer} is prime`:arr
};

function test() {
    const results1 = [
        solution1(12), //[2, 3, 4, 6]
        solution1(15), //[3, 5]
        solution1(13), //"13 is prime"
    ];
    console.log(results1);
  }
  
  test()