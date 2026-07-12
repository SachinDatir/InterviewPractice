// my name is sachin

let str = "ym eman si nihcas";

let res = str.split(" ");
// console.log(res);
let rev = "";
for (let i = 0; i < res.length; i++) {
  rev += res[i].split("").reverse().join("");
}

//     // console.log(typeof(char))
//     console.log(char.split("").reverse().join(""))
// }
console.log(rev)

let arr = [2, 4, 6, 1, 7, 3, 2, 4];

let resp = arr.filter((el, index) => {
  return arr.indexOf(el) === index;
});

console.log(resp);

let names = "Sanchitaa jade".toLowerCase();
let rr = names.split("").filter((el, index) => {
  return names.indexOf(el) === names.lastIndexOf(el);
});

console.log(rr);

//Check if array is sorted or not

let cities = [67, 45, 98, 32];
let isSorted = true;
for (let i = 0; i < cities.length; i++) {
  if (cities[i] > cities[i + 1]) {
    isSorted = false;
    break
  }
}

console.log(isSorted?"sorted":"not sorted")

let numbers = [1,2,3,4]
const isSortedd = (arr) => {
  let asc = true, desc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]){
        asc = false
        console.log("asc")
        
    }
    if (arr[i] < arr[i+1]) {
        desc = false;
        console.log("desc")

    }
  }

  return asc || desc;
};

console.log(isSortedd(numbers))