function solution1(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

/**
 * Reduce Method
 */
function solution2(str) {
  let arr = str.split(" ");
  let reducedString = arr.reduce((prev, curr, index) => {
    return prev + " " + curr.split("").reverse().join("");
  }, "");
  return reducedString.trim();
}

/**
 * First Suggestion
 */
function solution3(str) {
  let arr1 = str.split(" ");
  arr1 = str.split(" ").map((arrElement) => {
    return arrElement.split("").reverse().join("");
  });
  return arr1;
}

function test() {
  const results1 = [
    solution1("The quick brown fox jumps over the lazy dog."),
    solution1("apple"),
    solution1("a b c d"),
    solution1("double  spaced  words"),
  ];
  console.log(results1);

  const results2 = [
    solution2("The quick brown fox jumps over the lazy dog."),
    solution2("apple"),
    solution2("a b c d"),
    solution2("double  spaced  words"),
  ];
  console.log(results2);

  const results3 = [
    solution3("The quick brown fox jumps over the lazy dog."),
    solution3("apple"),
    solution3("a b c d"),
    solution3("double  spaced  words"),
  ];

  console.log(results3);
}

test();
