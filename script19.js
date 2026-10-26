// find All Pairs with a Given Sum

const findPairs = (arr, target) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        output.push([arr[i], arr[j]]);
      }
    }
  }

  return output;
};
console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));

const findPairsTwo = (arr, target) => {
  let set = new Set();
  let output = [];
  for (num of arr) {
    let complement = target - num;
    if (set.has(num)) {
      output.push(complement, num);
    }

    set.add(num);
  }

  return output;
};

console.log("maxSub");
const maxSubarraySum = (arr) => {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
console.log(maxSubarraySum([5, 4, -1, 7, 8]));

let numbers = [10, 20, 30];

const max = numbers.reduce((a, b) => Math.max(a, b), -Infinity);   
console.log(max)