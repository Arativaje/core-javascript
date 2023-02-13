var arr = ["apple", "mango", "apple", 
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item, 
index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));

//Or

var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

//Check if an element is present in an array [duplicate]
const array = [1, 2, 3];
const value = 1;
const isInArray = array.includes(value);
console.log(isInArray);