
//do while approach
// const bubbleSort = (arr) => {
//     let n = arr.length - 1; // n keeps reducing after each full pass
//     let swapped;
//
//     do {
//         swapped = false; // Reset swap tracker at the start of each pass
//         for (let i = 0; i < n; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 // Swap elements
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true; // Mark that a swap happened
//             }
//         }
//         n--; // Reduce the range after each pass since the largest element is sorted
//     } while (swapped); // Keep looping until no swaps happen
//
//     return arr; // Return the sorted array
// };
//
// // Test cases
// console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
// console.log(bubbleSort([3, 2, 1])); // Output: [1, 2, 3]
// console.log(bubbleSort([10, 20, 5, 7, 8])); // Output: [5, 7, 8, 10, 20]
//


// pure for loop approach
const bubbleSort = (arr) => {
    var noSwaps;
    let n=arr.length-1;
    for(let i=0;i<arr.length;i++){
        noSwaps=true;
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwaps=false;
            }

        }
        n--;
        if(noSwaps)break;
    }

    // different loop backward approach
    //
    // var noSwaps;
    // for(let i=arr.length;i>0;i--){
    //     noSwaps=true;
    //     for(let j=0;j<i-1;j++){
    //
    //         if(arr[j]>arr[j+1]){
    //             const temp=arr[j];
    //             arr[j]=arr[j+1];
    //             arr[j+1]=temp;
    //             noSwaps=false;
    //         }
    //     }
    //
    //     if(noSwaps)break;
    // }


    return arr;
};

// Test cases
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(bubbleSort([3, 2, 1])); // Output: [1, 2, 3]
console.log(bubbleSort([10, 20, 5, 7, 8])); // Output: [5, 7, 8, 10, 20]

