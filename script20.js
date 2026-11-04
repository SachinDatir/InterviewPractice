const multiplyExpectCurrent = (arr) => {
  let result = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = product;
    product *= arr[i];
  }

  product = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= arr[j];
  }

  return result;
};

console.log(multiplyExpectCurrent([1, 2, 3, 4]));

// let arr = [2, 2, 1, 1, 2, 2]

// console.log(arr.length/2)

const findMajority = (arr) => {
  let obj = {};

  for (const num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  for(const el in obj){
    if(obj[el]> arr.length/2){
         return Number(el);
    }
  }
  
  return null;
};
console.log(findMajority([3, 3, 4, 2, 3, 3, 3]));
console.log(findMajority([2, 2, 1, 1, 2, 2]))
console.log(findMajority([1, 2, 3, 4]))
