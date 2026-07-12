// Find the First Non-Repeated Character

let input = "swiss";

function firstNonRepeatedChar(str) {
  let res = {};

  for (let char of str) {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }

  for (let char of str) {
    if (res[char] === 1) {
      return char;
    }
  }

  return null;
}

// console.log(firstNonRepeatedChar(input));
// console.log(firstNonRepeatedChar("aabb"));

//Find All Duplicates in an Array

let arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("arr length", arr.length);
let res = arr.filter((el, index) => {
  return arr.indexOf(el) !== index;
});
// console.log(res);
// console.log("res length", res.length);

//Two Sum (Find Pair with Given Sum)

let nums = [2, 7, 11, 15],
  target = 9;

function twoSumNested(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetSum) {
        return {
          index: [i, j],
          numbers: [arr[i], arr[j]],
        };
      } else if (arr[i] - arr[j] == targetSum) {
        return {
          index: [i, j],
          numbers: [arr[i], arr[j]],
        };
      }
    }
  }
  return [];
}

// console.log(twoSumNested(nums, target));


const checkAnagram =(str1,str2)=>{
    if(str1.length!==str2.length){
        return false
    }
    let a = str1.split("").sort().join("")
    let b = str2.split("").sort().join("")
  

    if(a === b){
        return "given string is anagram"
    }
    else{
        return "given string is not anagram"
    }  
    // let 
}

s = "anagram", t = "nagaram"
s = "anagram", t = "nagarame"
console.log(checkAnagram(s,t))

