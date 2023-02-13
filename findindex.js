const ages = [4, 10, 18, 20];

const result= ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

console.log(result);


// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.