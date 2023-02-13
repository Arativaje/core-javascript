const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}
numbers.reduce(myFunc);

//console.log(total);

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.