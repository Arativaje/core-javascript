const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

console.log(index);

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index1 = fruits.indexOf("Apple", 3);

console.log(index1);


// The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right.