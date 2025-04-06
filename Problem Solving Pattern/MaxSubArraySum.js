// taking a max result variable
// using a loop which would move left to right by i++;
// use another loop to track n 
// another while loop to loop throgh n number and sum on a temp varaiable. 
// comapore with global varaiable and store the max
// return max 

//edge cases 
//for empty array return null


//another approch 

//finding sum of n digit number 
//starting from n and add the reight number and remove left number and compare 
//if the max is greater than adding and removing operation then updated max 
// returtn result;


const maxSubArraySum=((nums,n)=>{
    let maxSum=0;
    if(nums.length===0){
        return null;
    }

    for(let i=0;i<n;i++){
        maxSum+=nums[i];   
    }


    let result = maxSum;
    let j=0;
    while (j + n < nums.length) { 
        maxSum = maxSum - nums[j] + nums[j + n]; // Shift the window
        result = Math.max(maxSum, result); // Update max sum if needed
        j++; // Move to the next window
    }
    
    

    // for(let i=0;i<nums.length;i++){

    //     let tempSum=0;
    //     if(i+n<=nums.length){
    //     for(let j=i;j<i+n;j++){
    //       tempSum+=nums[j];
    //     }
    //     }
    //     result=Math.max(result,tempSum);
    // }
    return result;
})


console.log(maxSubArraySum([4,2,1,6],1));