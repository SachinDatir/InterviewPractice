const operator = (...args) => {
  const condition = args.pop(); // last argument is condition
  const numbers = args.flat(3); // method removes nested arrays by “flattening” them into a single-level array.

  console.log(numbers, ">>>");
  if (condition === "Multiply") {
    return numbers.reduce((a, b) => a * b, 1);
  } else if (condition === "Add") {
    return numbers.reduce((a, b) => a + b, 0);
  } else {
    return "Invalid condition";
  }
};

console.log(operator(3, "Add"));
console.log(operator([8, 9,[7,[9]]], "Add"));

//to reduce the interations and time
//SELECT * FROM TestCases WHERE TestCaseID <= 9999;

// const result = allRows
//   .filter(row => row.TestCaseID <= 9999)
//   .map(row => runTest(row));
