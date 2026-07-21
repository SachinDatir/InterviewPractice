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

findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
};
findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// remove duplicates

const removeDuplicates = (arr) => {
  let output = arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });
  console.log(output);
};

removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]);

// find second max from array
const findSecondMax = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  console.log(secondMax);
};

findSecondMax([-1, -2, -3, -4, -5, -6]);

//Reverse each word but keep the sentence order.
console.log("::::::::::::");
const revInput = (str) => {
  let arr = str.split(" ");
  let rev = "";
  for (let i = 0; i < arr.length; i++) {
    rev += arr[i].split(" ").reverse().join(" ");
  }

  console.log(rev);
};
revInput("I love JS");
//"I evol SJ"

//find Missing number.
let missingNum = [];

const findMissingNum = (arr) => {
  let max = arr[arr.length - 1];
  let set = new Set(arr);
  let missing = [];
  console.log(max);
  for (let i = 1; i < max; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};
console.log(findMissingNum([1, 2, 4, 5, 6, 8]));

//reverseOnlyLetters
const reverseOnlyLetters = (str) => {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  const checkSpecialChar = (char) => /[^a-zA-Z0-9]/.test(char);
  console.log(checkSpecialChar(arr));

  while (left < right) {
    if (checkSpecialChar(arr[left])) {
      left++;
    } else if (checkSpecialChar(arr[right])) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  console.log(arr, ">>>>>>>>>>>");
};

reverseOnlyLetters("A!v@g%");
