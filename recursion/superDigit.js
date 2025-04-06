function superDigit(n, k) {
    // Write your code here
    if(n<10){
        return n;
    }
    else {
    
    
             n=n.toString().split('');
        
       
        let total=0;
        
        for(let i=0;i<n.length;i++){
            total+=parseInt(n[i]);
        }
    
        total*=k;
        
        k=1;
        
        return superDigit(total,k); 
        
    }

}

console.log(superDigit(12345,5));