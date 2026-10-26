// find All Pairs with a Given Sum

const findPairs =(arr,target)=>{
    let output = []
    for(let i =0;i<arr.length;i++){
        if(arr[i]+arr[i] == target){
            output.push([arr[i]])
        }
    }

    return output
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9))