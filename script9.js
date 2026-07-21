const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Apparel" },
  { name: "Phone", category: "Electronics" },
];

Electronics = [];
Apparel = [];

// for (let obj of products) {
//   //   console.log(obj.name);
//   if (obj.category == "Electronics") {
//     Electronics.push(obj);
//   } else if (obj.category == "Apparel") {
//     Apparel.push(obj);
//   }
// }

// let res = {}
// res["Electronics"] = Electronics
// res["Apparel"] = Apparel

// console.log(res,":::::::::")

function groupByCategory(arr) {
  let res = {};
  for (let obj of arr) {
    let cat = obj.category;

    if (!res[cat]) {  // check if the cat exist or not 
      res[cat] = []; // if it is not exist then creating empty cat 
    }

    res[cat].push(obj);
  }

  return res;
}

console.log(groupByCategory(products));

//Longest Word in a String

let str = "Cypress and Playwright are great automations tools";

const findLongestStr = (str) => {
  let res = str.split(" ");
  let longestWord = "";

  for (char of res) {
    if (char.length > longestWord.length) {
      longestWord = char;
    }
  }
  console.log(longestWord);
};
findLongestStr(str);

//Reverse a String In-Place (Using a Loop)

const revString = (str) => {
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }

  return rev;
};
console.log(revString("cypress"));

const revStringTwoPointer = (str) => {
  let arr = str.split("");

  let left = 0;
  let right = arr.length - 1;
  console.log(right);
  while (left < right) {
    // let temp = arr[left];
    // arr[left] = arr[right];
    // arr[right] = temp;

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
  return arr.join("");
};
console.log(revStringTwoPointer("cypress"));

//"aabcccccaaa" → "a2b1c5a3"
let input = "aabcccccaaa";

console.log(">>>>>>>>>>>>>>>>>.");

//Compress a String
//Example 1: "aabcccccaaa" → "a2b1c5a3"
function compressString(str) {
  let count = 1;
  let updateStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      updateStr += str[i] + count;
      count = 1;
    }
  }
  return updateStr.length < str.length ? updateStr : str;
}
// console.log(updatedStr);
// console.log(count);

console.log(compressString(input));

//Move Zeroes

const moveZero = (arr) => {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr2.concat(arr1));
};

moveZero([0, 1, 0, 3, 12]);

//Find the Missing Number

const findMissingNum = (arr, target) => {
  let n = arr.length;

  expectedSum = (n * (n + 1)) / 2;
  console.log(expectedSum);

  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  // console.log(total)
  return expectedSum - total;
};
nums = [2, 0, 1, 4];
console.log(findMissingNum(nums, 6));

array = [1, 2, 3, 4, 5];
let aa = array.pop();
console.log(aa);
array.unshift(aa);

console.log(array);
 
const rotateArray = (arr, k) => {
  while (k > 0) {
    let aa = arr.pop();
    console.log(aa);
    arr.unshift(aa);
    k--;
  }

  return arr;
};

let myArray = [1, 2, 3, 4, 5];
console.log(rotateArray(myArray, 2));
