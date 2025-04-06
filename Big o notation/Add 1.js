const addUpTo=(n)=>{
    let total=0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}
let t1=performance.now();
console.log(addUpTo(10000000000));
let t2=performance.now();
console.log(`time elapsed add 1: ${(t2-t1)/1000} seconds`);