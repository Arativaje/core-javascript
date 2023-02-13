const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

console.log(keys);

// The keys() method returns an Array Iterator object with the keys of an array.

// The keys() method does not change the original array.