const findingPair=(arr)=>{

    //[-3,-2,-1,0,1,2,3]=[-3,3]
    //[-100,-50,-20,-10,0,1,2,3,60] //undefioned
    //[-100,-50,0,10,30,50,101] //[50,50]

    //1.declaring empty arryy name foundPair=[]
    //use while loop use i and j as pointer
    //i will go as array length and j will come backwards as i
    //if arr[i]+arr[j]===0 then push to the array and return or j-- 
    //if empty array return undefioned

    let i=0;
    let j=arr.length-1;

    while (i<arr.length) {
        if(i>=j || Math.abs(arr[i])>Math.abs(arr[j])) {
            j=arr.length-1;
            i++;
        }if (arr[i]+arr[j]===0) {
            return [arr[i],arr[j]];
        }
        else{
            j--;
        }
        
    }

    return undefined;
    
}

//console.log(findingPair([-3,-2,-1,0,1,2,3]));
//console.log(findingPair([-100,-50,-20,-10,0,1,2,3,60]));
console.log(findingPair([-100,-50,0,10,30,50,101]));