const radixSort=(arr)=>{
    //find positive and negative number and push it in new array.
    // pass the value on a helper method and make negative number into pisitive.

    // take a variable name max Digit
    //use a loop to to iterate each variable and split through split method and compare the length and update maxDIgit
    //create another variable on arr.length Array.from({ length: 10 }, () => []); empty Array as bucket
    //use a while loop which will go to up to max digit j.
    //inside that use a for loop for i=0 to arr.length 
    // split arr[i] and check arr[i] has j no element from right. if not put it on 0 bucket or corresponded bucket
    //after successfull iteration use another for loop on bucket and extract element from it and update arr.
    //return arr from helper method
    // join that negative arr and positive arr and return


    let positiveArr=[];
    let negativeArr=[];

    for(let item of arr){
        if(item<0){
            item=Math.abs(item);
            negativeArr.push(item);
        }
        else{
            positiveArr.push(item);
        }
    }
  
    let newPositiveArr=radixSortHelper(positiveArr);
    let newNegativeArr=radixSortHelper(negativeArr);
    newNegativeArr=newNegativeArr.reverse().map((num)=>-num);
    
   
    return [...newNegativeArr,...newPositiveArr];
    
    // let maxDigit=0;
    // for(let num of arr){
    //     maxDigit=Math.max(maxDigit,num.toString().length);
    // }

    // let j=0;

    // while(j<maxDigit){
    //     let bucket=Array.from({length:arr.length},()=>[]);
       
    //     for(let i=0;i<arr.length;i++){
    //         const num=Math.floor(Math.abs(arr[i])/Math.pow(10,j))%10;
    //         bucket[num].push(arr[i]);
    //     }
    //      //console.log('check bucket',bucket);
    //     arr=[];
    //     for(let item of bucket){
    //         arr.push(...item);
    //     }
        

    //     j++;
           
    // }
    // return arr;
}

const radixSortHelper=(arr)=>{
    let maxDigit=0;

    for(let item of arr){
        if(item===0){
            item=1;
        }
           maxDigit=Math.max(maxDigit,Math.floor(Math.log10(item)+1));  
        
    }
    
   
    let j=0;
    while (j<maxDigit) {
        let bucket=Array.from({length:10},()=>[]);
        //console.log(bucket);
        
        for(let i=0;i<arr.length;i++){
           const digit=Math.floor(arr[i]/Math.pow(10,j))%10;
           //console.log(digit);
           bucket[digit].push(arr[i]);
    }
        arr=bucket.flat();
        j++;
    }
    return arr;
}


console.log(radixSort([5, 3, 1, 7, 2]));  
console.log(radixSort([10, 100, 1000, 1, 0]));  
console.log(radixSort([9, 99, 999, 0, 9999]));  
console.log(radixSort([0, 0, 0, 0]));  

console.log(radixSort([-5, -3, -1, -7, -2]));  
console.log(radixSort([-9, -99, -999, -9999]));  
console.log(radixSort([-1, 0, 1]));  
console.log(radixSort([-100, -10, -1, 0, 1, 10, 100]));  

console.log(radixSort([12345, 67890, 54321, 98765, 0, 11111]));  
console.log(radixSort([-99999, -54321, -11111, 0, 22222, 99999]));  
console.log(radixSort([Math.pow(10, 6), Math.pow(10, 7), Math.pow(10, 8), 1, 0]));  
