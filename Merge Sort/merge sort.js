const mergeSort=(arr)=>{
//declare a empty merged array
    //base case should be set on arr length =1
    //calculate mid with math floor
    //use slice to divide the array in two parts left and right
    // use two recusion to pass left and right and return value 
     
    //compaire and sort this two part using loop and pointer 
    //and store it on mergesd empty array
    //at the end return merged array
    //during merges if on pointer reached it length then use ... operator and concat the another element with merged array
    
    

    if (arr.length===1) {
        return arr;
    }
    var merged=[];
    const mid=Math.floor(arr.length/2);
    const left=arr.slice(0,mid);
    const right=arr.slice(mid);
    
    //console.log(left,right);
    
    const leftResult=mergeSort(left);
    const rightResult=mergeSort(right);

    let leftPointer=0;
    let rightPointer=0;

    
    while (leftPointer<leftResult.length && rightPointer<rightResult.length) {
        if (leftResult[leftPointer]<rightResult[rightPointer]) {
            merged.push(leftResult[leftPointer]);
            leftPointer++;
        }else if(leftResult[leftPointer]>rightResult[rightPointer]){
            merged.push(rightResult[rightPointer]);
            rightPointer++;
        }
            // for same value
        else{
            merged.push(leftResult[leftPointer]);
            merged.push(rightResult[rightPointer]);
            rightPointer++;
            leftPointer++;
        }
    }
    //console.log('before  result',leftResult,rightResult);
    //console.log('before  merged',merged,leftPointer,rightPointer);

    if (leftPointer!==leftResult.length) {
        merged.push(...leftResult.slice(leftPointer));
    }
    if (rightPointer!==rightResult.length) {
        merged.push(...rightResult.slice(rightPointer));
    }
    //console.log('check merged finally',merged);
    return merged;

       
}

console.log(mergeSort([6,5,4,3,2,1,23,454,454,35432,344]));