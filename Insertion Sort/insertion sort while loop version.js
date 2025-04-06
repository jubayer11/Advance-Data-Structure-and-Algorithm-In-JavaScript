const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let selectedValue = arr[i];
        let j = i - 1;

        // Shift elements to the right
        while (j >= 0 && arr[j] > selectedValue) {
            arr[j + 1] = arr[j];
            j--;
            
        }

        // Insert selectedValue at the correct position
        arr[j + 1] = selectedValue;
    }
    return arr;
}

console.log(insertionSort([5, 3, 4, 1]));  // ✅ [1, 3, 4, 5]
