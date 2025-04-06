const getFrequency=(abc,efg)=>{
  if(abc.length!==efg.length){
            return false;
        }
    for (let i = 0; i < abc.length; i++) {

        let index=efg.indexOf(abc[i]**2);
        if (index===-1) {
            return false;
        }else {
            efg.splice(index,1);
        }
    
    }

    return true;
}


console.log(getFrequency([1,2,3],[1,4,9]));