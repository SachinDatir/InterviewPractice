// let arr = [9, 2, 4, 6, 8, 1, 2, 4, 9];
// let res = {};
// for (let num of arr) {
//   if (res[num]) {
//     res[num]++;
//   } else {
//     res[num] = 1;
//   }
// }
// console.log(res);
// const newArr = [];
// for (key in res) {
//   // console.log(typeof(res[key]))
//   // console.log(Number(res[key]))
//   if (res[key] == 1) {
//     // console.log(key)
//     // console.log(res[key],'>>>>>>>>>>>')
//     newArr.push(Number(key));
//   }
// }
// console.log(newArr);

// let output = arr.filter((num, index) => {
//   return arr.indexOf(num) !== index;
// });
// console.log(output);

// let num = 3553212312345678;
// let aa = Array.from(String(num), Number);

// // console.log(aa);
// console.log('>>>>>>>>>>>>>>>>.');

// for (let i = 0; i < aa.length; i++) {
//   for (let j = 0; j < aa.length; j++) {
//     if (aa[i] < aa[j]) {
//       let c = aa[i];
//       aa[i] = aa[j];
//       aa[j] = c;
//     //   console.log(c)
//     }
//   }
// }
// console.log(aa)
// console.log('???????????????????')


let nums = 7351345678;
let digits = Array.from(String(nums), Number);
console.log(digits,'>>>>>>>>>')
let sorted = [];
for (let d = 9; d >= 0; d--) {
  sorted = sorted.concat(digits.filter(x => x === d));
// digits.filter((x)=>{
//     if(x===d){
//        sorted.push(x)
//     }
// }) 
}

console.log(Number(sorted.join(''))); 
console.log(sorted.join(''))
