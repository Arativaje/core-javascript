interface firstHuman{
    firstName:string;
    lastName:string;
    displayName():string;
}
class  firstPerson implements firstHuman{
    firstName='arati';
    lastName='vaje';
    displayName(){
        return this.firstName + ' ' +this.lastName;
    }
}
var firstPersonObj:firstHuman = new firstPerson;
console.log(firstPersonObj.displayName());
var basicObjNew={
    firstName:'Maayra',
    lastName:'vaje',
    displayName:function(){
        return this.firstName + ' ' +this.lastName;
    }
}
console.log(basicObjNew.displayName());
firstPersonObj=basicObjNew;
console.log(firstPersonObj.displayName());