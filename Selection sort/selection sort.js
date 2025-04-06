const selectionSort=(arr)=>{
    //1. loop through all element
    //declare a minimum value variable
    //assign minimal value with arr[i]
    //take another loop check from j=i to length
    // check if arr[j] is minimal than minial value
    // if it's minimal update minimal 
    // after second loop update arr[i] with minimal value
    
    var minimal;
    var minimalIndex;
  
    for(let i=0;i<arr.length;i++){
        minimal=arr[i];
        minimalIndex=i;
 
        for(let j=i+1;j<arr.length;j++){
            if (arr[j]<minimal) {
                minimal=arr[j];
                minimalIndex=j;
            }
        }
        if(minimalIndex!=i){
          const temp=arr[i];
           arr[i]=minimal;
          arr[minimalIndex]=temp;
        }


    }

    return arr;
}

console.log(selectionSort([15,24,123,-42,31]));