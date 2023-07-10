function solution1(string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i].length >= 5 ? (arr[i] = arr[i].split("").reverse().join("")) : null;
  }
  return arr.join(" ");
}

function solution2(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

function solution3(str) {
  let result = "",
    forWord = "",
    backWord = "";

  for (let char of str) {
    if (char !== " ") {
      forWord += char;
      backWord = `${char}${backWord}`;
      console.log([backWord, forWord]);
    } else {
      if (forWord.length < 5) {
        result += ` ${forWord}`;
      } else result += ` ${backWord}`;

      forWord = "";
      backWord = "";
    }
  }

  if (forWord.length !== 0) {
    if (forWord.length < 5) {
      result += ` ${forWord}`;
    } else result += ` ${backWord}`;
  }

  return result.trim();
}

function test() {
  const results1 = [
    solution1("I am going to the houses"),
    solution1("Welcome"),
  ];
  console.log(results1);

  const results2 = [
    solution2("I am going to the houses"),
    solution2("Welcome"),
  ];
  console.log(results2);

  const results3 = [
    solution3("I am going to the houses"),
    solution3("Welcome"),
  ];

  console.log(results3);
}

test();
