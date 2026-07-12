// let a = "ramanand";
// let b = "anaramnd";
// if (a.length === b.length) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; i < b.length; j++) {
//       console.log(a[i])
//         console.log(b)
//       if (a[i].includes(b)) {
//         console.log(a[i])
//         console.log(b)
//        return true;
//       } else {
//         console.log("it isnot anagram")
//       }
//       break;
//     }
//   }
// } else {
//   throw Error("it is not anagram");
// }

let a = "Agramna";
let b = "Anagram";
res = {};
res2 = {};

let rr = a.split("");
let ff = b.split("");
if (a.length === b.length) {
  for (const char of rr) {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
}

if (a.length === b.length) {
  for (const char of ff) {
    if (res2[char]) {
      res2[char]++;
    } else {
      res2[char] = 1;
    }
  }
}

console.log(">>>>>>>>>>>>>>>");
let isAnagram = true;

console.log("=== Debugging Character Counts ===");
console.log("res  (from first string):", res);
console.log("res2 (from second string):", res2);
console.log("==================================");

for (let key in res) {
  console.log(`Checking character: '${key}'`);
  console.log(`Count in res :  ${res[key]}`);
  console.log(`Count in res2: ${res2[key]}`);

  if (res[key] !== res2[key]) {
    console.log(`❌ Mismatch found for '${key}'`);
    isAnagram = false;
    break;
  } else {
    console.log(`✅ Match for '${key}'`);
  }

  console.log("---------------------------");
}

console.log("Result:", isAnagram ? "Anagram ✅" : "Not an Anagram ❌");

const checkMax = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //   return arr.reduce((max, num) => num > max ? num : max);
  return max;
};
console.log(checkMax([-8, -1, -3, -6, -7]));

let fnn = "vijeet";
let lnn = "dani";

let info = {
  fnn: "chinmay",
  lnn: "deshpande",

  displayName: function () {
    // this = info
    console.log(this.fnn + " " + this.lnn);

    let displayName2 = () => {
      // arrow → inherits this from parent (info)
      console.log(this.fnn + " " + this.lnn);
    };
    displayName2();
  },
};

info.displayName();

const capitalizeWords = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].charAt(0).toUpperCase() +arr[i].slice(1).toLowerCase();

  // }

  let result = arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result;
};

console.log(capitalizeWords(["apple", "banana", "mango", "grapes"]));


let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char);

const name = "W3Schools";
let letter = name[2];
console.log(letter);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

console.log(text1.substring(2,5));


