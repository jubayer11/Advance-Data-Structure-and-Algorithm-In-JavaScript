function numberCompare(num1,num2){
    return num2-num1;
}
const abc=[6,4,15,10].sort(numberCompare);
console.log(abc);

function compareByLen(str1,str2){
    return str1.length-str2.length;
}

const efg=["steele","Colt","Data Structure","Algorithms"].sort(compareByLen);

console.log(efg);