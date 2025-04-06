const charCount=(chars)=>{
    const count={};
    for(char of chars){
        // if (/[A-Za-z0-9]/.test(char)) {
        //     isAlphaNumeric(char);
        //  count[char]?count[char]+=1:count[char]=1;
            
        // }
        char=char.toLocaleLowerCase();
        if (isAlphaNumeric(char)) {
         count[char]?count[char]+=1:count[char]=1;
            
        }
    }
    return count;
}

const isAlphaNumeric=(char)=>{
    const code=char.charCodeAt(0);
    if (
        !(code>47 && code<58) &&
        !(code>96 && code<123) &&
        !(code>64 && code<91)
        
    ) {
       return false;
    }
   return true;
}

console.log(isAlphaNumeric('a'));

console.log(charCount('hello everyone Listen TO Me Very Carefully 12736%%%#@&'));