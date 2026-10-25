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

 

  for (const char of newStr) {
  if (obj[char] === 1) {
    return char;
  }
}

return null;

};

console.log(firstNonRepeating("swiss"));

console.log(firstNonRepeating("aabbc"));

console.log(firstNonRepeating("aabb"));


// const   removeDuplicates =(str)=>{
//     let seen = new Set()
//     let duplicate = new Set()

//     for(const char of str){
//         if(seen.has(char)){
//             duplicate.add(char)
//         }else{
//             seen.add(char)
//         }
//     }

//     return [...seen].join("")
// }


    const removeDuplicates = (str) => {
    let result = "";

    for (const char of str) {
        // TODO: Check whether result already contains char.
        // TODO: If it doesn't, add char to result.

        if(!result.includes(char)){
            result+=char

        }
        
    }

    return result;
    };
console.log(removeDuplicates("programming"));
console.log(removeDuplicates("banana"));      // "ban"
console.log(removeDuplicates("aabbcc"));// Find missing number

// const findMissingNum = (arr) => {
//   let n = arr.length;
//   console.log(n)
//    sum = (n*(n + 1)) / 2;
//   console.log(sum)

//   const total = arr.reduce((acc ,el)=>{
//     acc+el
//   },0)
//   return sum - total
// };

const findMissingNum = (arr) => {
  let missingNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i + 1) {
      return i + 1;
    }
  }
  return null;
};

console.log(findMissingNum([1, 2, 4, 5]));
console.log(findMissingNum([1, 2, 3, 4, 5, 7]));

//Find duplicate elements

const findDuplicates = (arr) => {
  let obj = {};

  for (let num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  console.log(obj);

  let duplicate = [];

  for (number in obj) {
    if (obj[number] > 1) {
      duplicate.push(Number(number));
    }
  }

  console.log(duplicate);
};

findDuplicates([1, 2, 3, 2, 4, 1]);

const findDuplicate2 = (arr) => {
  let seen = new Set();
  let duplicate = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicate.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicate];
};

console.log(findDuplicate2([1, 2, 3, 2, 4, 1]));

// Two sum
//arr = [2, 7, 11, 15], target = 9 → [0, 1]

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return {
          additionEle: [arr[i], arr[j]],
          index: [i, j],
        };
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

//Merge two sorted arrays

//[1, 3, 5] and [2, 4, 6] → [1, 2, 3, 4, 5, 6]

const mergeTwoSortedArray = (arr1, arr2) => {
  let concated = arr1.concat(arr2);
  for (let i = 0; i < concated.length; i++) {
    for (let j = 0; j < concated.length; j++) {
      if (concated[i] <concated[j]) {
        let temp = concated[i];
        concated[i] = concated[j];
        concated[j] = temp;
      }
    }
  }
  return concated
};

console.log(mergeTwoSortedArray([1, 3, 5], [2, 4, 6]));


