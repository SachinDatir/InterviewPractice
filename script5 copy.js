const arr = [3, 0, 5, 0, 7, 0, 1];

let newArr = [];
let rr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    newArr.push(arr[i]);
  } else {
    rr.push(arr[i]);
  }
}
console.log(rr.concat(newArr));

console.log(">>>>>>>>>");
const palindrome = (str) => {
  let aa = str.length;
  let k = 0;
  for (let i = 0; i < aa / 2; i++) {
    console.log(str[i], "-------------", str[aa - i - 1]);
    if (str[i] !== str[aa - i - 1]) {
      k = 1;
      break;
    }
  }
  if (k == 0) {
    console.log("given str is palindrome");
  } else if (k == 1) {
    console.log("given str is nottt palindrome");
  }
};

palindrome("Sachin");
console.log(">>>>>>>>>>>>>>>.......................>>>>>");

palindrome("civic");

const toTitleCase = (str) => {
  let arr = str.split(" ");
  let result = [];
  // console.log(str)

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return result.join(" ");
};
console.log(toTitleCase("sachin vitthal datir"));
console.log(typeof toTitleCase("sachin vitthal datir"));

const data = [
  { name: "sachin", age: 26 },
  { name: "Rahul", age: 27 },
  { name: "Sanket", age: 21 },
];

// const sortByLoop = (input, fn) => {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i][fn] > input[j][fn]) {
//         let temp = input[i];
//         input[i] = input[j];
//         input[j] = temp;
//       }
//     }
//   }
//   return input;
// };

// let output = sortByLoop(data, "age");
// console.log(output);


for (el of data){
  for(obj in el){
    console.log(el[obj])
    // if
    // console.log(elobj)
    console.log(el)
  }
}