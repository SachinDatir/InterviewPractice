//solve fibonnaci series

const fibonnaci = (num) => {
  let a = 0,
    b = 1;

  if (a == 0) {
    console.log(a);
    console.log(b);
  }

  for (let i = 2; i < num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};

fibonnaci(6);

// remove the duplicates

// e.g banana => ban

let str = "banana";

let splitted = str.split("");
console.log(splitted);
let output = splitted.filter((el, index) => {
  return str.indexOf(el) == index;
});

console.log(output.join(""), ".............");

//seprate letter , numbers, special char from the string

let num = [];
let letter = [];
let specialChar = [];
const seprateBy = (str) => {
  for (let i = 0; i <= str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      num.push(str[i]);
    } else if (/[a-zA-Z]/.test(str[i])) {
      letter.push(str[i]);
    } else {
      specialChar.push(str[i]);
    }
  }

  console.log(num, ">>>>>>>>>>>");
  console.log(specialChar, ">>>>>>>>>>>");
  console.log(letter, ">>>>>>>>>>>");
};
seprateBy("sach$inD78!@");

// check for palindorme

const palindorme = (str) => {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
};

console.log(palindorme("sachin"));
console.log(palindorme("civic"));

const reverseArr = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log(reverseArr([7, 6, 5, 4]));

// reverse the array and skip specific index

const revArr = (arr, skipIndex) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (left == skipIndex) {
      left++;
      continue;
    }
    if (right == skipIndex) {
      right--;
      continue;
    }

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};

console.log(revArr([1, 2, 3, 4, 5, 6], 2));

// reverse a string without using thr reverse

const revStr = (str) => {
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }

  return rev;
};

console.log(revStr("Sachin"));
console.log(revStr("hello"));

// check weather str is palindrome or not

const checkStrPalindrome = (str) => {
  let a = str.length;
  let isPalindrome = true;
  for (let i = 0; i < a / 2; i++) {
    console.log(str[a - i - 1]);
    if (str[i] !== str[a - i - 1]) {
      isPalindrome = false;

      break;
    }
  }

  if (isPalindrome) {
    console.log("given str is palindrome");
  } else if (!isPalindrome) {
    console.log("given str is not palindrome");
  }
};

checkStrPalindrome("madam");
checkStrPalindrome("Sachin");

//. Find the first repeating character

const firstRepeating = (str) => {
  let obj = {};

  for (char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  // console.log(obj)

  for (word in obj) {
    if (obj[word] > 1) {
      console.log(word);
    }
  }
};

const firstNonRepeating = (str) => {
  let newStr = str.toLowerCase();
  let obj = {};

  for (char of newStr) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj);

  for (word in obj) {
    if (obj[word] <= 1) {
      console.log(word);
    }
  }
};

firstNonRepeating("swiss");

// count the vowels in the string

const countVowels = (str) => {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("javascript"));

//Find the largest number in an array without sort()

const findLargestNum = (arr) => {
  let largestNum = arr[0];
  for (num of arr) {
    if (num > largestNum) {
      largestNum = num;
    }
  }

  return largestNum;
};

console.log(findLargestNum([2, 3, 4, 60, 5, 10, 0]));

// find the second largest number

const secondLargestNum = (arr) => {
  let max = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondLargest = max;
      max = num;
    } else if (num > secondLargest && num != max) {
      secondLargest = num;
    }
  }

  console.log(max, secondLargest);
};

secondLargestNum([1, 5, 7, 34, 56, 12]);

// remove the duplicate element from array

const removedup = (arr) => {
  let res = arr.filter((el, index) => {
    return arr.indexOf(el) == index;
  });

  console.log(res);
};

removedup([1, 2, 2, 3, 1]);
