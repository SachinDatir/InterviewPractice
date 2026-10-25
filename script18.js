const firstRepeating = (str) => {
  let arr = str.toLowerCase();
  let result = arr.split("").filter((el, index) => {
    return arr.indexOf(el) !== arr.lastIndexOf(el);
  });

  return result[0];
};

console.log(firstRepeating("abcaed"));
console.log(firstRepeating("abccba"));

const firstRepeating2 = (str) => {
  let obj = {};

  for (const char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] > 1) {
      return key;
    }
  }
};

console.log("firstRepeating2")
console.log(firstRepeating2("abccba"));


console.log("firstRepeating3")
const firstRepeating3 = (str) => {
  let seen = new Set();

  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      return str[i];
    }
    seen.add(str[i]);
  }
  return null
};

console.log(firstRepeating3("abccba"));
