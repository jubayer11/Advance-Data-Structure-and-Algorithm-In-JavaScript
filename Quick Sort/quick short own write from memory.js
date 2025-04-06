const quickSort=(arr,left=0,right=arr.length-1)=>{
    //the base case should be left>right and we would return arr at the end
    //create another function which would return pivot index
    //create a separate function for swap
    if (left<right) {
        let pivotIndex=getPivotIndex(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
        
    } 
    
    return arr;
}

const getPivotIndex=(arr,left,right)=>{
    // should have variable name swapIndex containt left index; 
    // loop should go left to less than equal to right
    // on finding out lesser varible thant arr[left] swapIndex will  increase first then swap
    // at the end swap index will swap with left as i am first left element is my pivot element
    //return swapIndex
    
    let swapIndex=left;
    for(let i=left+1;i<=right;i++){
        if (arr[left]>arr[i]) {
            swapIndex++;
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,left,swapIndex);
    
    
    return swapIndex;
    
}

const swap=(arr,i,j)=>{
    const temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    //console.log('check swap arr',arr,i,j);
}

console.log(quickSort([565,54,41,41,54,34,1,5,3354,34323343,4,43,23,5667,77,6,655,4,323]));



