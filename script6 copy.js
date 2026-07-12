const checkCondition = (score) => {
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 80) {
    console.log("Grade B");
  } else if (score >= 70) {
    console.log("Grade C");
  } else {
    console.log("Grade F");
  }
};

checkCondition(75);

const arr = [0, -1, 0, 3, 12];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Max:", max);
console.log("Min:", min);

// The goal is to print numbers from 1 to 100,
//  but replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz"
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(30);
