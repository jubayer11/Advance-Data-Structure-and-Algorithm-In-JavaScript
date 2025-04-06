const quickSort=(arr)=>{
    //base case should be arr length =<1
    //pick the first elemenmt
    // use loop to find the bigger elemenmt or smaller element and push it on repective biggerElements and smalllerElements
    //return with qucikSort reqursion with spread biggerElements and pivot elemt and smalllerElements

    if(arr.length<=1){
        return arr;
    }
    let smallerElement=[];
    let biggerElement=[];
    let pivotElement=arr[0];
    
    for(let i=1;i<arr.length;i++){
        if(arr[i]>pivotElement){
            biggerElement.push(arr[i]);
        }else{
            smallerElement.push(arr[i]);
        }
    }
    //console.log([...smallerElement,pivotElement,...biggerElement])
  const sortedLeft = quickSort(smallerElement);
  const sortedRight = quickSort(biggerElement);
  return [...sortedLeft, pivotElement, ...sortedRight];
}

console.log(quickSort([5,4,3,2,1,6,19]));