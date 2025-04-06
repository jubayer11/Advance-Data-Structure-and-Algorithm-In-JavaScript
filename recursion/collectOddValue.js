const collectOddValue=(arr)=>{
    let result=[];

    function helper(helperInput){
        if (helperInput.length===0) {
            return;
        }

        if(helperInput[0] % 2 !==0){
            result.push(helperInput[0]);
        }
        
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(collectOddValue([1,3,7,9,11,14,16]));