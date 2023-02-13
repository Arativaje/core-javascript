const process = require('process');
 

 
console.log('Executed in the current iteration : 1');

setImmediate(()=>{
    console.log("setImmediate : 3");
})

process.nextTick(() => {
    console.log('Executed in the next iteration : 2');
  });
//nextTick() which is used by developers in real-time applications every day to defer the 
//execution of a function until the next Event Loop Iteration.

// This method is used to break up long running operations and run a callback function immediately 
// after the browser has completed other operations such as events and display updates.