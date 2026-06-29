//Find All Duplicates in an Array

const findDuplicates = (nums) => {
  let res = nums.filter((el, index) => {
    return nums.indexOf(el) !== index;
  });

  return res;
};
arr = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDuplicates(arr));

const findDuplicatesOptimized = (nums) => {
  let seen = new Set();
  let dup = [];
  for (let el of nums) {
    if (seen.has(el)) {
      dup.push(el);
    } else {
      seen.add(el);
    }
  }

  return (dup, seen);
};

console.log(findDuplicatesOptimized(arr));

//find the missing one

findMissing = (nums) => {
  let n = nums.length;
  //    console.log(n)
  const expectedSum = (n * (n + 1)) / 2;

  console.log(expectedSum, ":::::");
  let total = nums.reduce((acc, el) => {
    return acc + el;
  }, 0);

  let res = total - expectedSum;
  console.log(res, ">>>>res");
};

findMissing([1, 3, 4]);

const findMissingOptimized = (nums) => {
  let numSet = new Set(nums);
  let missing = [];

  let min = Math.min(...nums);
  let max = Math.max(...nums);

  //   console.log(min);
  //   console.log(max, "//////////");

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};

console.log(findMissingOptimized([1, 2, 4, 5, 7]));

const longest = (arr) => {
  let max = arr[0];

  for (let word of arr) {
    if (word.length > max.length) {
      max = word;
    }
  }

  console.log(max);
};

longest(["Sachin", "Sanchita"]);

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const Subarray = (nums) => {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
  }
};

const splitStrAndReverse = (str) => str.split("").reverse().join("");
function insertAt(originalString, index, valueToInsert) {
  return (
    originalString.slice(0, index) + valueToInsert + originalString.slice(index)
  );
}
const hasSpecialChar = (character) => /[^a-zA-Z0-9 ]/.test(character);
let str = "A$b#c!";
let specialCharIndex = [];
let specialCharValue = [];
let originalStr = "";
for (let i = 0; i < str.length; i++) {
  if (hasSpecialChar(str[i])) {
    specialCharIndex.push(i);
    specialCharValue.push(str[i]);
  }
}
let reversedStr = splitStrAndReverse(str);
console.log(reversedStr, "::::::::::");
let finalString = reversedStr;
for (let i = 0; i < specialCharValue.length; i++) {
  finalString = insertAt(finalString, specialCharIndex[i], specialCharValue[i]);
}

console.log(finalString, ":::::::::::::::::::::::::::");
console.log(specialCharIndex);
console.log(specialCharValue);
// console.log(splitStr(str))

const reverseOnlyLetters = (str) => {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  checkSpecialChar = (char) => /[^a-zA-Z0-9 ]/.test(char);

  console.log(checkSpecialChar(str), "::::::::");
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
  return arr.join("");
  console.log(arr[right]);
};

// let str = "A$b#c!";
console.log("Original:", str);
console.log("Result:  ", reverseOnlyLetters(str));
