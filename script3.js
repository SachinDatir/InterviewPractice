//Find missing number in array (1 to n)
let missingNum = [];
const findMissingNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      //console.log("Missing number is ",i+1);
      missingNum.push(i + 1);
    }
  }
  return missingNum;
};

console.log(findMissingNum([1, 2, 3, 4, 6]));
console.log(findMissingNum([1, 2, 3, 4, 6, 7, 9, 10]));

const arr = [1, [2, [3]]];

console.log(arr[1][1][0]);
console.log(arr.flat(Infinity), ">");
console.log([].concat(...arr));

let obj = {
  "Q&A": [
    {
      cardType: "Question",
      title: "Page Title should be XYZ",
      content: {
        data: [
          {
            text: "Answer 1",
          },
          {
            text: "Answer 2",
          },
        ],
      },
    },
  ],
};

// console.log(obj["Q&A"][0].content.data[0].text);

// for (char in obj) {
//   let rr = obj[char];
//   for (data of rr) {
//     let aa = data.content.data;
//     for (txt of aa) {
//       console.log(txt);
//     }
//   }
// }
 Object.values(obj).flat().forEach((El)=>{
  El.content?.data?.forEach((item)=>console.log(item.text))
})


Object.values(obj).flat().forEach(card => {
  card.content?.data?.forEach(item => console.log(item.text));
});
// console.log(res)
