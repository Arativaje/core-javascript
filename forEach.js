const fruits = ["apple", "orange", "cherry"];
const result = fruits.forEach(myFunction);

function myFunction(item, index, arr) {
    arr[index] = item * 10;
  }

console.log(result);

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.


// the forEach() and map() methods are both used to loop through arrays and objects. 
// The forEach() method does not return a new array, whereas the map() method returns a new array. 
// The map() method is used to transform the elements of an array, 
// whereas the forEach() method is used to loop through the elements of an array.