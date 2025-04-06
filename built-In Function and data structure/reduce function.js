const arr=[1,2,4,5,5];

const sum=arr.reduce((acc,value,index,arr)=>{
    console.log(arr[index]);
    return acc+=value;
},0)

console.log(sum);