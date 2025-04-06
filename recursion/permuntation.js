var permute = function(nums) {
    //setting up base for num length 1
    //set up a result empty array
    //use a loop to go through nums 
    //remove i element(store it on current perms) pass rest of them in recursion
    //get the recursive value and use loop to add current perms and push it to result
    //return result 

    if(nums.length===1){
        return [nums];
    }
    let result=[];
    for(let i=0;i<nums.length;i++){
        let curentParms=nums[i];

        let remaining=nums.slice(0,i).concat(nums.slice(i+1));
        console.log(remaining);
        let resultParms=permute(remaining);

        for(let item of resultParms){
            result.push([curentParms, ...item]);
        }
       
    }

 return result;
};

console.log(permute([1,2,3]));