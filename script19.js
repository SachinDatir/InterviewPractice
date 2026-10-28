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
console.log(max);

console.log(".............");

const productExceptSelf = (arr) => {
  const result = new Array(arr.length).fill(1);

  let product = 1;

  // First pass: product of elements to the left
  for (let i = 0; i < arr.length; i++) {
    result[i] = product;
    product *= arr[i];
  }

  product = 1;

  // Second pass: multiply by product of elements to the right
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= arr[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

console.log(productExceptSelf([2, 3, 4, 5]));
// [60, 40, 30, 24]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0, 0, 9, 0, 0]

const rotateArray = (arr, position) => {
  let i = 0;
   if (arr.length === 0) return arr;

  position = position % arr.length;

  while (i < position) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
    i++;
  }

  return arr;
};  
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 12));
console.log(rotateArray([], 3));
