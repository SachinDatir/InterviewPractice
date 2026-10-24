//find the longest substring

const longestSubstring = (str) => {
  let substring = "";
  let longest = "";

  for (const char of str) {
    if (substring.includes(char)) {
      const index = substring.indexOf(char); // p , w
      //   console.log(index,"index")
      console.log(substring, "before slice");
      substring = substring.slice(index + 1);
      //   console.log(substring,"sub")
    }

    substring += char;
    console.log(substring);

    if (substring.length > longest.length) {
      longest = substring;
    }
  }

  return longest;
};

console.log(longestSubstring("pwwkew")); // "wke"

const longestSubstring2 = (str) => {
  const lastSeen = new Map();
  let left = 0;
  let longest = "";

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right);

    if (right - left + 1 > longest.length) {
      longest = str.slice(left, right + 1);
    }
  }

  return longest;
};

console.log(longestSubstring2("pwwkew")); // "wke"
console.log(longestSubstring2("abcabcbb")); // "abc"
console.log(longestSubstring2("bbbbb")); // "b"

const moveZeros = (arr) => {
  let zeros = [];
  let nonZero = [];
  for (const num of arr) {
    if (num === 0) {
      zeros.push(num);
    } else {
      nonZero.push(num);
    }
  }

  return nonZero.concat(zeros);
};
console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

const move = (arr) => {
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }

  for (let i = position; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

let arr = [0, 1, 0, 3, 12];
console.log(move(arr), ">>>>>>>");
// let position = 0;
// let num = 1;

// arr[position] = num;

// console.log(arr); // [1, 1, 0, 3, 12]

console.log("check anagram")
const isAnagram = (str1, str2) => {
  let string1 = str1.toLowerCase().split("");
  let string2 = str2.toLowerCase().split("");


  let obj1 = {};
  let obj2 = {};
 if (string1.length !== string2.length) {
  return false;
}
  if (string1.length === string2.length) {
    for (char of string1) {
      if (obj1[char]) {
        obj1[char]++;
      } else {
        obj1[char] = 1;
      }
    }
  }

  if (string1.length === string2.length) {
    for (char of string2) {
      if (obj2[char]) {
        obj2[char]++;
      } else {
        obj2[char] = 1;
      }
    }
  }

  let isAnagram = true;
  for (let keys in obj1) {
    if (obj1[keys] !== obj2[keys]) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
};
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello1", "world"));


//Separate letters, numbers, and special characters from a string.
let str = "1234sachin@!5$";
const sortBy = (str) => {
  let arr = str.split("");
  let numbers = [];
  let char = [];
  let special = [];
  for (let i = 0; i < arr.length; i++) {
    if (/[0-9]/.test(arr[i])) {
      numbers.push(Number(arr[i]));
    } else if (/[a-zA-Z]/.test(arr[i])) {
      char.push(arr[i]);
    } else {
      special.push(arr[i]);
    }
  }
  return { numbers, char, special };
};

console.log(sortBy(str));

const longestStr = (str) => {
  let substring = ""
  let longest = "";
  for (char of str) {
    if (substring.includes(char)) {
      let index = substring.indexOf(char);
      substring = substring.slice(index + 1);
    }

    substring += char;
  }

  if(substring.length>longest.length){
    longest = substring
  }

  return {
    longest:longest,
    longestLength:longest.length
  }
};

console.log(longestStr("pwwkew"));
