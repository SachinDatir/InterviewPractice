let str = "aabcd";

const nonRepeating = (str) => {
  let result = str.split("").filter((char, index) => {
    return str.indexOf(char) == str.lastIndexOf(char);
  });

  console.log(result[0]);
  console.log(result);
};

nonRepeating(str)

const Byfrequecy = (str) => {
  let res = str.split("");
  let obj = {};
  for (char of res) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj, "::::::::::");
  let result = [];
  for (word in obj) {
    console.log(obj[word] == 1);
    if (obj[word] == 1) {
      result.push(word);
    }
  }

  console.log(result[0]);
};

console.log(Byfrequecy(str));
/*
The return statement inside a function immediately stops the execution of the loop and exits
 the function the very first time it encounters a match.

In JavaScript, when a return is executed inside a loop, 
it doesn't wait for the rest of the loop to finish—it hands back that single value and terminates right away.
*/

// if test suite takes  hours to run , and manager ask us to reduce the time to 30 min , how can you do it?
// how can we mock api , what it is the moto behind mocking api?
// what is the diff bet git pull and git fetch



