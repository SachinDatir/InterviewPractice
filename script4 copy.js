const findMax = (num) => {
  let smallest = num[0];
  let holdMax;
  for (let i = 0; i < num.length; i++) {
    holdMax = smallest > num[i] ? smallest : num[i];
    smallest = holdMax;
  }
  console.log(holdMax);
};

findMax([4, 6, 7, 3, 9]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//reverse the specific substring from the string

let revSubString = (str, index) => {
  let rev = str.split(" ");
  rev[index] = [...rev[index]].reverse().join("");
  console.log(rev);
};

revSubString("My name is sachin", 2);

//count of char

const CountOfChar = (str, char) => {
  return str.split(char).length - 1;
};

console.log(CountOfChar("GeeksForGeeks", "G"));

let string = "GeeksForGeeks";
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i].includes("e")) {
    count++;
  }
}
console.log(count, ">>");

// . Find the First Non-Repeated Character in a String in JavaScript?

const frequecy = (str) => {
  let aa = str.split("");
  let res = {};
  for (char of aa) {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }

  for (char of aa) {
    if (res[char] == 1) {
      return char;
    }
  }
};

console.log(frequecy("GeeksFFoorGeeks"));

//find the longest word from the string

const longestWord = (word) => {
  let aa;
  let longest = "";
  if (typeof word === "string") {
    aa = word.split(" ");
  } else {
    for (char of word) {
      if (char.length > longest.length) {
        longest = char;
      }
    }
    return longest;
  }
};
console.log(longestWord(["sachijn", "datir", "sankejdnft", "pankaj"]));

let arr = ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log(rev, "REV");

const addition = (num) =>
  [...String(num)].reduce((acc, el) => acc + Number(el), 0);

console.log(addition(34));

let names = ["rahul", "sachin", "pradip", "sairaaj", "monu"];
let output = names.map((el, index) => {
  return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
});
console.log(output, ">>>>>>>>>>>>>>>>");

let newArr = [];
for (let i = 0; i < names.length; i++) {
  newArr.push(
    names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()
  );
}

console.log(newArr, "newArr?????????????");

//example fo closure
const Person = function (pName, age, gender) {
  let name = pName;
  this.age = age;
  this.gender = gender;

  this.getName = function () {
    return this.age;
  };
};

var person = new Person("Sachin", 26, "male");
console.log(person);
console.log(person.getName());

const x = { name: "Skd" };
x.name = "SachinD";
// x = {address:"MH"}error
console.log(x);

const extractingArgs = (...args) => {
  return args[1];
};
console.log(extractingArgs(3, 5, 6, 2));

function AddArgs(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
}

AddArgs(3, 5, 1, 3, 8);

//using multiple options
function AddAllArgs(a, b, ...args) {
  let sum = a + b;

  // for (let i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }
  // console.log(sum);

  //using reduce

  let sumOfNum = [a, b, ...args];

  let aa = sumOfNum.reduce((acc, el) => {
    return acc + el;
  }, 0);
  console.log(aa, "....reduceway");
}
AddAllArgs(3, 3, 8, 90);

const spreadOp = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

let threeNum = [3, 4, 5, 6];
console.log(spreadOp(...threeNum));

let arr1 = [2, 4, 1, 6];
let cloneArr = [...arr1];
console.log(cloneArr, "?????");

//promise with spread operator

const sumofThree = (...num) => {
  return new Promise((resolve, reject) => {
    if (num.length > 3) {
      reject("Only three num or less are allowed");
    } else {
      let sum = 0;
      for (let i = 0; i < num.length; i++) {
        sum += num[i];
        // i++;
      }
      resolve("Sum has been calculated:" + sum);
    }
  });
};

// sumofThree(2, 4, 9)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

///stringMatching

const findSubString = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i].includes(str[j])) {
        result.push(str[j]);
      }
    }
  }

  return result.length > 0 ? result : "No such pair found";
};

console.log(findSubString(["Sachin", "hi", "ac"]));

//find the number which sum is equal to the target

const findSum = (target, arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        res.push({ value: [arr[i], arr[j]], index: [i, j] });
      }
    }
  }

  if (res.length === 0) {
    console.log("No such pair found");
  } else {
    return res;
  }
};

console.log(findSum(10, [1, 3, 6, 9, 3]));

const rotation = (arr, rotate) => {
  if (rotate == 0) return arr;
  for (let i = rotate; i > 0; i--) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
};

console.log(rotation([2, 3, 4, 5, 7], 3));

let arrOne = ["Sachin", 26, "Datir", undefined, null, 1999];
let ss = arrOne.filter((el) => {
  return !isNaN(el);
});
console.log(ss);

var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName();

const toTitleCase = (str) => {
  let res = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(res);
};

toTitleCase("sachin vitthal datir");

sortBy = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};
const data = [
  { name: "sachin", age: 26 },
  { name: "Rahul", age: 27 },
  { name: "Sanket", age: 21 },
];
console.log(sortBy(data, "age"));

// check for the case
// const xa = 10;
// const Xa = 101;

// console.log(xa)
// console.log(Xa)

let num = 12332;
let count1 = 0

// while (num > 0) {
//   num = num / 10;
//   count1++;
// }
// console.log(count)