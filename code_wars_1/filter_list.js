function solution1(l) {
  return l.filter((item) => typeof item === "number");
}


function test() {
    const results1 = [
   solution1([1,2,'a','b']),//[1,2]
   solution1([1,'a','b',0,15]),//[1,0,15]
   solution1([1,2,'aasf','1','123',123]),//[1,2,123]
    ];
    console.log(results1);
  }
  
  test()