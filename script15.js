// Find missing number

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
  console.log(obj)

  let duplicate = []

  for(number in obj){
    if(obj[number]>1){
     duplicate.push(Number(number));

    }
  }

  console.log(duplicate)
};

findDuplicates([1, 2, 3, 2, 4, 1])


const findDuplicate2 = (arr)=>{
  let seen = new Set()
  let duplicate = new Set()
  for(const num of arr){
    if(seen.has(num)){
      duplicate.add(num)
    }else{
      seen.add(num)
    }
  }

  return [...duplicate]
  
}

console.log(findDuplicate2([1, 2, 3, 2, 4, 1]));