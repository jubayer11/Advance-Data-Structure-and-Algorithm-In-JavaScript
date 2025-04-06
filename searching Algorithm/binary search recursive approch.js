function binarySearch(arr, elem) {
    if (arr.length === 0) return -1; // Base case: element not found

    let k = Math.floor(arr.length / 2); // Correct middle calculation

    if (arr[k] === elem) {
        return k; // Found the element, return index (WRONG!)
    } else if (elem > arr[k]) {
        let newArr = arr.slice(k + 1); // Remove left half, keeping right
        let result = binarySearch(newArr, elem);
        return result === -1 ? -1 : result + k + 1; // Adjust index
    } else {
        let newArr = arr.slice(0, k); // Remove right half
        return binarySearch(newArr, elem);
    }
}

// Test case
console.log(binarySearch([2, 5, 6, 12, 14, 16, 17, 165, 243], 165)); // Output: 5
