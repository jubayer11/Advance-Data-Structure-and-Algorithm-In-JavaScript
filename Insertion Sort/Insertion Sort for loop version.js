const insertionSort=(arr)=>{
// fisrt loop will move from i=1 to n arr length
//arr[i] would be selected value
// j would start from i to 0 and j--
// it would check arr[j] is greater tahn selectedValue. if greater then swap right 
    //else it would set on that j+1
//return arr

    var selectedValue;
    var selectedIndex;

    for(let i=1;i<arr.length;i++){
        selectedValue=arr[i];
        selectedIndex=i;

        for(let j=i-1;j>=0 && arr[j]>selectedValue;j--){
            arr[j+1]=arr[j];
            selectedIndex=j;
        }
        
        arr[selectedIndex]=selectedValue;
        
    }
            return arr;

}
console.log(insertionSort([5, 3, 4, 1]));

