function solution1(a, b) {
  return a.filter((item) => !b.includes(item));
}

function test() {
  const results1 = [
    solution1([1, 2], [1]),
    solution1([1, 2, 2], [1]),
    solution1([1, 2, 2], [2]),
    solution1([1, 2, 2], []),
    solution1([], [1, 2]),
    solution1([1, 2, 3], [1, 2]),
    solution1([-16, 6, -10, -3], [-16, 6]),
  ];
  console.log(results1);
}

test();
