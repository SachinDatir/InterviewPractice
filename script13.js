findMissingNum = (arr) => {
  let max = arr[arr.length - 1];
  let set = new Set(arr);
  let missingNum = [];
  //   console.log(aa);

  for (let i = 1; i < max; i++) {
    if (!set.has(i)) {
      missingNum.push(i);
    }
  }
  console.log(missingNum);
};

findMissingNum([1, 3, 4, 5, 7]);

// easy way to find second largest number

let Input = [10, 5, 20, 8, 15];

let newRes = Input.sort((a, b) => b - a);

console.log(newRes[1]);

// Output: 15;

const input = [10, 5, 20, 8, 15, 20, 10];
let unique = [...new Set(input)].sort((a, b) => b - a);
console.log(unique);

const secondLargest = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && max > num) {
      secondMax = num;
    }
  }

  console.log(max);
  console.log(secondMax);
};

secondLargest([-1, -6, -8, -10]);

//character frequecy

const charFrequency = (str) => {
  let res = {};

  for (char of str) {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }

  for(word in res){
    if(res[word]>1){
        console.log(word)
    }
  }
  console.log(res)
};

charFrequency("Javascript")
