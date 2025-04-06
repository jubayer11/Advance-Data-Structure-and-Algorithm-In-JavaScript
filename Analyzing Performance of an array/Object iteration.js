
//object.entries
const user01 = { name: "Alice", age: 25 };
console.log(Object.entries(user01)); 

//object values
//const user01 = { name: "Alice", age: 25 };
console.log(Object.values(user01)); 
// Output: [ 'Alice', 25 ]

//const user01 = { name: "Alice", age: 25 };
console.log(Object.keys(user01)); 
// Output: [ 'name', 'age' ]

console.log(user01.hasOwnProperty("name")); // Output: true
console.log(user01.hasOwnProperty("gender")); // Output: false


const user = { name: "Alice", age: 25, city: "Paris" };

Object.keys(user).forEach(key => {
    console.log(`${key.toUpperCase()}: ${user[key]}`);
});
// Output:
// NAME: Alice
// AGE: 25
// CITY: Paris



Object.values(user).forEach(value => {
    console.log(`Value: ${value}`);
});
// Output:
// Value: Alice
// Value: 25
// Value: Paris




Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
// city: Paris

// You can also iterate with a for...of loop using Object.entries():


for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
// city: Paris