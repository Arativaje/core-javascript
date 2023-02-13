console.log("This is the first statement");

setTimeout(function(){
	console.log("This is the second statement");
}, 1000);

console.log("This is the third statement");


// Output: This is the first statement
// This is the third statement
// This is the second statement