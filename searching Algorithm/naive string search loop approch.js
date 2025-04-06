const findString=(arr,abc)=>{

    //check arr[i] matches with abc[j]
    //if matches then check weather j=== abc.length-1
    //if matches then add count and make j=0 and i= i+1-(abc.length-1)if not then increse j++ and i++;
        //if does not match then set j=0; and i++;
    
    arr=arr.split('');
    abc=abc.split('');

    let i=0
    let j=0;
    let count=0;
    while(i<arr.length){
        if(arr[i]===abc[j]){
            if(j===abc.length-1){
                count+=1;
                j=0;
                console.log('before i',i);
                i=i-(abc.length-2);
                console.log('after i',i,abc.length-2);
            }else{
                i++;
                j++;
            }
        }else{   
            i++;
            j=0;
        }
    }
    return count;
    
}


console.log(findString('abcabcabca', 'abca'));