/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //car=rat true
    //abir=tabir false
    //jubayer= reyabuj true

    // procedure

    //1. two frequency counter
    //checking length if not the same length then return false
    //assign s value as property and count number of times using loop
    // do the same thing for t
    //uisng loop and for freq1 and check freq2 value exists on the freq1, if not return false. 
    //check if it's matches number of times each property on freq1 and freq2
    //return true;


    let freq1={};
    let freq2={},

     arr1=s.split('');
     arr2=t.split('');

    if(arr1.length!==arr2.length){
        return false;
    }
    let i=0;
    while(i<arr1.length){

        const value1=arr1[i];
        const value2=arr2[i];

    if(freq1[value1]!==undefined){
            freq1[value1]+=1;
        }else{
            freq1[value1]=0
        }

        if(freq2[value2]!==undefined){
            freq2[value2]+=1;
        }else{
            freq2[value2]=0
        }

        i++;
    }

    for(key in freq1){

        if(freq2[key]===undefined){
            return false;
        }

        else if(freq1[key]!==freq2[key]){
            return false;
        }

    }

    return true;

    };













