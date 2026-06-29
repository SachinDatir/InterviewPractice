//Valid Palindrome (With Punctuation)
let input = "A man, a plan, a canal: Panama";
let input2 = "race a car";
const validPalindrome = (str) => {
  let joinedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  console.log(joinedStr, ":::::::");
  let k = 0;
  for (let i = 0; i < joinedStr.length / 2; i++) {
    if (joinedStr[i] !== joinedStr[joinedStr.length - i - 1]) {
      k = 1;
      break;
    }
  }

  if (k == 0) {
    console.log(`${joinedStr} is palindrome`);
  } else if (k == 1) {
    console.log(`${joinedStr} is not palindrome`);
  }
};

validPalindrome(input);
validPalindrome(input2);

// remove duplicates without returning the new array
nums = [1, 1, 2, 2, 3];
const removeDuplicates = (nums) => {
  insertPos = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[insertPos]) {
      insertPos++;
      nums[insertPos] = nums[i];
    }
  }

  // console.log(nums)
  nums.length = insertPos + 1;

  return nums;
};

console.log(removeDuplicates(nums));

let array = [1, 1, 2, 2, 3];
console.log("Unique Length:", removeDuplicates(array)); // Output: 3
// console.log("Modified Array:", array.slice(0, 3));

// addition of the numbers

const sumOfNum = (num) => {
  let arr = num.toString().split("");
  let res = arr.reduce((acc, el) => {
    return acc + parseInt(el);
  }, 0);
  console.log(res);
};

sumOfNum(1234);

//reverse the array

const revArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log(revArray([1, 4, 7, 6, 5]));

const strs = ["flower", "flow", "flight"];

let a = strs[0];
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  // 1. Start by assuming the entire first word is the prefix
  let prefix = strs[0]; 

  // 2. Loop through every word in the array
  for (let word of strs) {
    // 3. While the current word does NOT start with our prefix
    while (word.indexOf(prefix) !== 0) {
      // Chop the last letter off the prefix
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix,">>>>>>>>>>>")
      
      // If the prefix gets chopped down to nothing, there's no common prefix
      if (prefix === "") return "";
    }
  }

  return prefix;
};

// const strs = ["flower", "flow", "flight"];
console.log("Result:", longestCommonPrefix(strs)); // Output: "fl"
console.log("Result:", longestCommonPrefix(["dog", "racecar", "car"])); // Output: "fl"
