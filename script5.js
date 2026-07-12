// 1] reverse first word and keep other same
// Str = "india good nature"
// output = "aidni good nature"

let str = "india good nature";

const revStr = (str, index) => {
  let rr = str.split(" ");
  rr[index] = rr[index].split("").reverse().join("");
  console.log(rr.join(" "));
};

revStr(str, 0);

//find out second largest and second smallest number from array
const findNum = (arr) => {
  if (arr.length < 2) {
    console.log("Array should have at least 2 elements");
    return;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num != largest) {
      secondLargest = num;
    }
  }
  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num != smallest) {
      secondSmallest = num;
    }
  }

  console.log(largest);
  console.log(secondLargest, "secondLargest");
  console.log(smallest, "smallest");
  console.log(secondSmallest, "secondSmallest");
};

let arr = [2, 6, 8, 5, 10];
findNum(arr);
let arr2 = [2];
findNum(arr2);

// find vovel from string and its count

const findVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      console.log(char);
    }
  }
  console.log(count);
};
findVowels("sachinI");


