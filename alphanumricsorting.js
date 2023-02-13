let arr = ["A1", "A10", "A11", "A12", "A2", "A3", "A4", "B10", "B2", "F1", "F12", "F3"]
//alphanumricsorting sort 
function normalizeMixedDataValue(value) {
    var padding = "000000000000000";
    // Loop over all numeric values in the string and 
    // replace them with a value of a fixed-width for 
    // both leading (integer) and trailing (decimal) 
    // padded zeroes. 
    value = value.replace(/(\d+)((\.\d+)+)?/g, ($0, integer, decimal, $3) => {
        // If this numeric value has "multiple" 
        // decimal portions, then the complexity 
        // is too high for this simple approach - 
        // just return the padded integer. 
        if (decimal !== $3) {
            return (padding.slice(integer.length) + integer + decimal);
        }
        decimal = (decimal || ".0");
        return (padding.slice(integer.length) + integer + decimal + padding.slice(decimal.length));
    });
    return (value);
}
function alphanumericSort(value) {
    var padding = "000000000000000";
    value = value.replace(/(\d+)((\.\d+)+)?/g, ($0, integer, decimal, $3) => {
        if (decimal !== $3) {
            return (padding.slice(integer.length) + integer + decimal);
        }
        decimal = (decimal || ".0");
        return (padding.slice(integer.length) + integer + decimal + padding.slice(decimal.length));
    });
    return (value);
}
console.log(arr);
arr.sort((a, b) => {
    return alphanumericSort(a) < alphanumericSort(b) ? -1 : 1;
});
console.log(arr);

//Answer
/*[
  'A1',  'A10', 'A11',
  'A12', 'A2',  'A3', 
  'A4',  'B10', 'B2', 
  'F1',  'F12', 'F3'  
]
[
  'A1',  'A2',  'A3',
  'A4',  'A10', 'A11',
  'A12', 'B2',  'B10',
  'F1',  'F3',  'F12'
]*/