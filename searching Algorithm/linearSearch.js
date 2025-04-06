function linearSearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if (arr[i]===value) {
            return i;
            
        }
    }
    return -1;
}

console.log(linearSearch([1,3,5,6,78,8],78));