//find the first non repeating character from the string
let str = "Swiss Armyy".toLowerCase();

// let str = "Swiss Army";
let result = str.split("").filter((char) => {
  return str.indexOf(char) === str.lastIndexOf(char);
});

console.log(result[0]);

// console.log(aa.join(''))

//find the first repeating character from the string
let res = str.split("").filter((char) => {
  return str.indexOf(char) !== str.lastIndexOf(char);
});

console.log(res, "res");

//find the last non repeating character from the string

let resultLast = str.split("").filter((char) => {
  return str.indexOf(char) === str.lastIndexOf(char);
});

console.log(resultLast[resultLast.length - 1]);

//Count frequency of each character in a string

let string = "Indian Army".toLowerCase().split("");
let obj = {};
for (char of string) {
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }
}
console.log(obj);

//Reverse a string without using built-in reverse()

let a = "Sachin";
let rev = "";
for (let i = a.length; i > 0; i--) {
  rev += a[i];
}
console.log(rev);

//Remove all duplicates from a string

// let str = "Swiss Army";
let resultss = str.split("").filter((char, index) => {
  return str.indexOf(char) === index;
});

console.log(resultss.join(""));

//Find the maximum occurring character

let strings = "Indian Armyyyyy".toLowerCase().split("");
let obj1 = {};
for (char of strings) {
    if (char === " ") continue;
//   if (obj1[char]) {
//     obj1[char]++;
//   } else {
//     obj1[char] = 1;
//   }
obj1[char] = (obj1[char] || 0) + 1;
}

let max = 0
let maxChar = ""
console.log(obj1);
for (words in obj1) {
    // console.log(obj1[words])
    if(obj1[words]>max){
        max = obj1[words]
        maxChar=words
    }
}

console.log(max, maxChar)

// Find all non-repeating characters


let aa = "Sachin vitthal Datir"
let resultAll = aa.split("").filter((char) => {
  return aa.indexOf(char) === aa.lastIndexOf(char);
});


console.log(resultAll, ">>>>>>>>>>>>>>>")

//Check if a string is a palindrome (ignore spaces & case)

const checkPalindrome =(str)=>{
  let res = str.split('').reverse().join('')
  console.log(res)

  if(res===str){
    console.log('given str is palindrome')
  }else{
    console.log('given str is not palindrome')
  }
}

checkPalindrome('sachin')
checkPalindrome('civic')

// Find the longest word in a sentence

let maxx = 0
let longestWord =""
let sen = "Power residers where people believe it resides"
let bb = sen.split(" ")
console.log(bb)

for(char of bb){
  if(char.length>maxx){
    maxx= char.length
    longestWord = char
  }
}
console.log(longestWord,">>>>>>")

let arr = ["rahul","jack","rahul","qualies"]

console.log(arr.sort())

let set = new Set(arr)

console.log(set);
