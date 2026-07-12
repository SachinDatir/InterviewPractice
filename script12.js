//factorial of a number

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = i * result;
  }
  console.log(result);
};

factorial(5);

//fibonacci series

const fibonacci = (num) => {
  let a = 0;
  let b = 1;
  if (a == 0) {
    console.log(a);
    console.log(b);
  }

  for (let i = 2; i < num; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
};

fibonacci(8);
console.log("::::::::::::::::::::::::::::::");

//check anagram

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    console.log("cannot be anagram because length is not same");
  }

  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");

  console.log(a);
  console.log(b);

  if (a === b) {
    console.log("it is anagram");
  } else {
    console.log("it is not anagram");
  }
};

anagram("Sachin", "Sachin");
anagram("Sachin", "Skdian");

let num = 2703200;
let arr = num.toString().split("");
let output = arr.reduce((acc, el) => {
  return acc + parseInt(el);
}, 0);

console.log(output);

findLongestWord = (str) => {
  let longestStr = "";
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr = arr[i];
    }
  }

  console.log(longestStr);
};

findLongestWord("Power resides where people believe it resides.............");
