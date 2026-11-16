// // find All Pairs with a Given Sum

// const findPairs = (arr, target) => {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i] == target) {
//       output.push([arr[i]]);
//     }
//   }

//   return output;
// };
// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));

// const candy = (arr) => {
//   total = arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {

//     }
//   }
// };

// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9))

// Write down program to remove duplicates and Sort. Please don’t use inbuilt methods like set, sort or unique. Write your own logic with loops/arrays.

const findDuplicateAndSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  // Sort the array
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
};
let num = [1, 5, 2, 6, 2, 4, 8, 6, 2, 4, 5, 1, 8, 3, 0];
findDuplicateAndSort(num);
console.log(num);

// Reverse specific word

const revWord = (str, index) => {
  let words = str.split(" ");
  words[index] = words[index].split("").reverse().join("");

  return words.join(" ");
};
console.log(revWord("My name is Sachin", 2));

// Input: digits = [1,2,3]
// Output: [1,2,4]

const plusOne = (digit) => {
  let newDigit = [];
  for (let num of digit) {
    newDigit.push(num);
  }
  newDigit[newDigit.length - 1] = newDigit[newDigit.length - 1] + 1;

  if (newDigit.length == 1 && newDigit[0] == 10) {
    for (let i =0 ; i < newDigit.length ; i++) {
      return newDigit[i].toString().split("").map(Number);
    }
  }
  return newDigit;
};

console.log(plusOne([9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([9,9]));


const isPalindrome = (num)=>{
  let str = num = num.toString();
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;

}

console.log(isPalindrome(-121));

const checkGoodInteger = (num)=>{
  
}