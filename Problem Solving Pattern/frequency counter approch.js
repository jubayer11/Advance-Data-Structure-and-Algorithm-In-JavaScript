const getFrequency=(abc,efg)=>{
  if(abc.length!==efg.length){
            return false;
        }

    const frequency1={};
    const frequency2={};
    for (const val of abc ){
        if (frequency1[val]!==undefined) {
            frequency1[val]+=1;
        }
        else{
            frequency1[val]=0;
        }
    }
    for (const val of efg ){
        if (frequency2[val]!==undefined) {
            frequency2[val]+=1;
        }
        else{
            frequency2[val]=0;
        }
    }


    for (const key in frequency1) {
        if (frequency2[key**2]===undefined) {
            return false;
        }
        else if(frequency1[key]!==frequency2[key**2]){
            return false
        }
    }
    

    return true;
}


console.log(getFrequency([1,6,2,3],[1,36,4,9]));