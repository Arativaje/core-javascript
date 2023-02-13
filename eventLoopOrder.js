const process = require('process');
const { callbackify } = require('util');
console.log("This is the first statement");

setTimeout(function () {
    console.log("This is the second statement");
}, 1000);

setInterval(function () {
    console.log("This is the second statement");
}, 2000);

setImmediate(() => {
    console.log("setImmediate : 3");
});

function myFunction() {
    console.log("myFunction: do first step");
    myCallback();
};
myCallback = () => {
    console.log("myCallback : do second step");
    myCallback3();
};

myCallback3 = () => {
    console.log("myCallback : do third step");
};
myFunction();

// call back hell
function myFunction() {
    console.log("myFunction: do first step");
    myCallback = () => {
        console.log("myCallback : do second step");
       
        myCallback3 = () => {
            console.log("myCallback : do third step");
           
        };
        myCallback3();
    };
    myCallback();
};
myFunction();

// with promise as solution
const myStep1 = () => {
    return new Promise((resolve,reject)=>{
        resolve("step 1 :  Get the data from DB");
    });
}

const myStep2 = () => {
    return new Promise((resolve,reject)=>{
        resolve("step 2 : Sort the data based widget order");
    });
}
const myStep3 = () => {
    return new Promise((resolve,reject)=>{
        resolve("step 3 : store the sorted data");
    });
}

function myMainFunction() {
    myStep1().then(res1=>{
        myStep2().then(res2=>{
            myStep3().then(res3=>{
                console.log(res1+" : "+res2+"  : "+res3)
            });
        });
    });
}
myMainFunction();

// with out chain 

const fetchList = (input) => {
    return new Promise((resolve,reject)=>{
        resolve(input+"step 1 : Get the data from DB \n");
    });
}

const sortList = (list) => {
    return new Promise((resolve,reject)=>{
        resolve(list+"step 2 : Sort the data based widget order \n");
    });
}
const storeList = (sortedList) => {
    return new Promise((resolve,reject)=>{
        resolve(sortedList + "step 3 : store the sorted data\n");
    });
}

function myMainFunction(input) {
    fetchList(input).then(widgetList=>{
        sortList(widgetList).then(sortedList=>{
            storeList(sortedList).then(finalResponse=>{
                console.log(finalResponse)
            });
        });
    });
}
myMainFunction("without chain data input \n");



// with chain


const fetchList1 = () => {
    return new Promise((resolve,reject)=>{
        console.log("step 1 : Get the data from DB ");
        resolve("step 1 : Get the data from DB");
    });
}

const sortList2 = () => {
    return new Promise((resolve,reject)=>{
        console.log("step 2 : Sort the data based widget order");
         resolve("step 2 : Sort the data based widget order");
    });
}
const storeList3 = () => {
    return new Promise((resolve,reject)=>{
        
         resolve( "step 3 : store the sorted data");
    });
}

function myMainFunction(input) {
    console.log(input);
    fetchList1()
    .then()
    .then(sortList2)
    .then(storeList3)
    .then(finalResponse=>{console.log(finalResponse)});
      
}
myMainFunction("with chain data input");


process.nextTick(() => {
    console.log('Executed in the next iteration : 2');
});

console.log("This is the last statement of file");