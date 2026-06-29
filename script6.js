// let str = "a#b$c%";
// let char = [];
// let aa = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "a" && str[i] <= "z") {
//     char.push(str[i]);
//   } else {
//     aa.push(str[i]);
//   }
// }

// console.log(char);
// console.log(aa);

// let str = "India is my country";

// const revStr = (str, index) => {
//   let rr = str.split(" ");
//   rr[index] = rr[index].split("").reverse().join("");
//   console.log(rr.join(" "));
// };
// revStr(str, 0);

//Check if string contains only digits

function checkDigits(str) {
  for(let char of str){
    if(char < '0' || char > '9'){
      return false;
    }
  }
  return true;
}
console.log(checkDigits("12345"));
console.log(checkDigits("12W345"));
console.log(checkDigits("skd"));
