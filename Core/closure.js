// Closure gives access to an outer function’s scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time. 

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc(); 