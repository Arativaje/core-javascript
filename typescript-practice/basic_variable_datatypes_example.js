// //decalred variable with number datatypes
// var x:number=10;
// console.log(x);
// //declared variable with string datatype
// var firstName:string="arati";
// console.log(firstName);
// //declared variable with boolean datatype
// var isFound:boolean=false;
// console.log(isFound);
// //declared variable with undefined datatype
// var sample:undefined;
// sample=undefined;
// console.log(sample);
// //declared variable with null datatype
// var sampleNew:null;
// sampleNew=null;
// console.log(sampleNew);
// //declared variable with any datatype
// var total:any=100;
// console.log(total);
// //declared variable with object
// var basicObj:any={
//     "id":12,
//     "firstName":"arati",
//     "email":"test@test.com"
// };
// console.log("My name is " +basicObj.firstName);
// //declared variable with nested object
// var basicObj:any={
//     "id":12,
//     "firstName":"arati",
//     "email":"test@test.com",
//     "address":{
//         "city":"Pune",
//         "state":"MH"
//     }
// };
// console.log("My city is "+basicObj.address.city);
// //declared variable with nested object with array
// var basicObj:any={
//     "id":12,
//     "firstName":"arati",
//     "email":"test@test.com",
//     "address":{
//         "city":"Pune",
//         "state":"MH"
//     },
//     "technicalSkills":['html','css','typescript']
// };
// console.log("I am a "+basicObj.technicalSkills[1]+" developer");
//practice
var sampleObj1 = {
    "firstName": "arati",
    "lastName": "vaje"
};
// console.log(sampleObj1); //output : {firstName:'arati', lastName:'vaje'}
// console.log(sampleObj1.lastName, sampleObj1.firstName); // output : vaje arati
// console.log(sampleObj1[0]); // output: undefined
// console.log(sampleObj1[1]); // output: undefined
// console.log(sampleObj1['firstName']); //output: arati
// console.log(sampleObj1['lastName']); // output:vaje
sampleObj1['id'] = 100;
//console.log(sampleObj1['id']); // output:undefined // 100
//console.log(sampleObj1); //output : {firstName:'arati', lastName:'vaje', id:100}
sampleObj1['aid'] = true;
sampleObj1['zid'] = null;
sampleObj1['firstName'] = "Maayra";
sampleObj1['firstName'] = ["Maayra", "arati"];
console.log(sampleObj1); //output : {firstName:['Maayra'], lastName:'vaje', id:100, aid:true zid:null}
console.log(sampleObj1.firstName); //output: ['maayra','arati']
console.log(sampleObj1.firstName[1]); //output: arati 
console.log(sampleObj1.firstName[2]); //output: undefined 
console.log(sampleObj1.firstName[3]); //output: undefined 
