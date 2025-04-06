const quickSort=(arr,left=0,right=arr.length-1)=>{

    if(left<right){
     let pivotIndex=pivot(arr,left,right);
     //left 
     quickSort(arr,left,pivotIndex-1);
     quickSort(arr,pivotIndex+1,right);
    }

    return arr;
    
}


function pivot(arr,start=0,end=arr.length+1) {
    var pivot=arr[start];
    var swapIndex=start;
    for(let i=start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
            //console.log('final arr',arr);
        }
       
    }
    swap(arr,start,swapIndex);
    return swapIndex;
     //console.log(arr);
}

function swap(arr,i,j) {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    
}



console.log(quickSort([1,5412,41,41,54,34,1,5,3354,34323343,4,43,23,5667,77,6,655,4,323]));