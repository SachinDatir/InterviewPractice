// // let arr = [{ a: 3.9 }, { b: 3.7 }, { c: 5.6 }];
// // let aa = [];
// // for (el of arr) {
// //   for (key in el) {

// //     aa.push(el[key]);

// //   }
// // }
// // for (let i = 0; i < aa.length; i++) {
// //   for (let j = 0; j < aa.length; j++) {

// //     if (aa[i] < aa[j]) {
// //       let cc = aa[i];
// //       aa[i] = aa[j];
// //       aa[j] = cc;
// //     }
// //   }
// // }
// // console.log(aa)

// let arr = [{ a: 3.9 }, { b: 3.7 }, { c: 5.6 }];

// let sorted = arr.map((obj) => Object.values(obj)[0]).sort((a, b) => b - a);

// console.log(sorted);
// // let year = prompt('Enter the year')
// const checkLeepYear = (year) => {
//   if ((year % 4 == 0 && year % 100!= 0) || year % 400 == 0) {
//     console.log(`${year} is leep`);
//   } else {
//     console.log(`${year} is not leep year`);
//   }
// };
// checkLeepYear(2025)
// checkLeepYear(2024)
// checkLeepYear(1900)

// const getCharCount = (str) => {
//   let aa = str.split("");
//   // console.log(aa);

//   let res = {};
//   for (const char of aa) {
//     if (res[char]) {
//       res[char]++;
//     } else {
//       res[char] = 1;
//     }
//   }
//   console.log(res);
// };
// getCharCount("MMy name is Machin");

// const jj = new Object();

// jj["jgfd"] = 9;
// console.log(jj);

// const revWord = (str, index) => {
//   let words = str.split(" ");
//   console.log(words);
//   console.log(">>>>>>>>>>>>>>>>>>>>>>>");

//   if (index < 0 || index > words.length) {
//     throw Error("Invalid index");
//   }
//   words[index] = [...words[index]].reverse().join("");
//   //   console.log(words)

//   console.log(words.join(" "));
// };
// revWord("My name is sachin", 2);


// a function that checks if two given strings are anagrams of each other (contain the same characters with the same frequency, just in a different order)
// let a = "eat";
// let b = "ame";
// if (a.length === b.length) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; i < b.length; j++) {
//       console.log(a[i])
//         console.log(b)
//       if (a[i].includes(b)) {
//         console.log(a[i])
//         console.log(b)
//        return true;
//       }
//       break;
//     }
//   }
//   console.log("jbihvhjb")
// } else {
//   throw Error("it is not anagram");
// }

// const palindrome = (str)=>{
//   let result =
// }

let str = "civic";

let res = str.split("")
console.log(res)
let rr = res.reverse().join("");
console.log(rr);

if (str === rr) {
  console.log("given str is palindrome");
} else {
  console.log("given str is not palindrome");
}
