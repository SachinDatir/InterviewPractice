// // find All Pairs with a Given Sum

// const findPairs = (arr, target) => {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i] == target) {
//       output.push([arr[i]]);
//     }
//   }

//   return output;
// };
// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));

// const candy = (arr) => {
//   total = arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {

//     }
//   }
// };

// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9))

// Write down program to remove duplicates and Sort. Please don’t use inbuilt methods like set, sort or unique. Write your own logic with loops/arrays.


const findDuplicateAndSort=(arr)=>{
  for(let i =0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1)
        j--;
      }
    }
  }
  // Sort the array
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}
let num = [1,5,2,6,2,4,8,6,2,4,5,1,8,3,0];
findDuplicateAndSort(num);
console.log(num);