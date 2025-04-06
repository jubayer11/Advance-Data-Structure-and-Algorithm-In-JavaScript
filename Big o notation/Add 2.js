const addUpTo=(n)=>{
   return n*(n+1)/2;
}
let t1=performance.now();
console.log(addUpTo(10000000000));
let t2=performance.now();
console.log(`time elapsed add 2: ${(t2-t1)/1000} seconds`);