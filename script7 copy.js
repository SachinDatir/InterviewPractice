// a function that checks if two given strings are anagrams of each other (contain the same characters with the same frequency, just in a different order)
let a = "eat";
let b = "ame";
// if (a.length === b.length) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; i < b.length; j++) {
//       console.log(a[i]);
//       console.log(b);
//       if (a[i].includes(b)) {
//         console.log(a[i]);
//         console.log(b);
//         return true;
//       }
//       break;
//     }
//   }
//   console.log("it is anagram");
// } else {
//   throw Error("it is not anagram");
// }

//An anagram is a word or phrase formed by rearranging the letters of another word or
//  phrase using all the original letters exactly once (e.g., "listen" and "silent")

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");

  console.log(a, b);

  return a === b;
}

console.log(`"${a}" and "${b}" are anagrams: ${isAnagram(a, b)}`);

isAnagram("Sachin", "Sachin");
