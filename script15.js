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
console.log(removeDuplicates("aabbcc"));