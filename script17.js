//  Find the missing number in an unsorted array

const findMissingNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i + 1) {
      return i + 1;
    }
  }

  return null;
};

console.log(findMissingNum([5, 6, 3, 2, 1]));

const findMissing = (arr) => {
  let n = arr.length;

  let expectedSum = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - sum;
};

console.log(findMissing([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissing([0, 1]));
console.log(">>>>>>>>>>>");
console.log(findMissing([0, 1, 3, 5]));

console.log(">>>>>>>>>>>>");

const findMissingNumbers = (arr, n) => {
  let existing = new Set(arr);
  let missing = [];
  for (let i = 0; i <= n; i++) {
    if (!existing.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};

console.log(findMissingNumbers([1, 3, 5, 6], 6));

console.log(findMissingNumbers([0, 1, 3, 5], 5));


