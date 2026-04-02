const maxAndSecondMax = (str) => {
  let res = str.split(" ");
  let freq = {};
  let max = 0;
  let secondMax = 0;
  let maxChar = "";
  let secondMaxChar = "";

  for (char of res) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq);

  for (word in freq) {
    let count = freq[word];

    if (count > max) {
      secondMax = max;
      secondMaxChar = maxChar;

      max = count;
      maxChar = word;
    } else if (count > secondMax && count < max) {
      secondMax = count;
      secondMaxChar = word;
    }
  }

  console.log("Max:", maxChar, max);
  console.log("Second Max:", secondMaxChar, secondMax);
};

maxAndSecondMax("chaos is a ladders chaos a");

const primeNum = (num) => {
  let k = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(primeNum(10));
console.log(primeNum(11));
primeNum(11);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr[10] = 10;
console.log(arr.length);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
const Input = {
  1: "a",
  2: "b",
  c: 3,
  "-": "z",
  10: "&",
};

const passInput = (Input, parameter) => {
  for (keys in Input) {
    
    if (parameter == keys) {
      console.log(Input[keys]);
    } else if (parameter === Input[keys]) {
      console.log(keys);
    }
  }
};
passInput(Input, 1);
passInput(Input, "z");

