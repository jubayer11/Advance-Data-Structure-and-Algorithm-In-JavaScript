const Arr = [3, 4, 5, 6, 7, 5];

let index3 = Arr.indexOf(3); // returns 0
console.log(index3);

let index13 = Arr.indexOf(13); // returns -1
console.log(index13);

let index5 = Arr.indexOf(5); // returns 2
console.log(index5);

let index7 = Arr.indexOf(7); // returns 4
console.log(index7);


let firstIndex = Arr.indexOf(5); // First occurrence index
let secondIndex = Arr.indexOf(5, firstIndex + 1); // Find 5 again after the first occurrence

console.log("First occurrence index:", firstIndex);  // Output: 2
console.log("Second occurrence index:", secondIndex); // Output: 5