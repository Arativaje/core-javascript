interface humaninterface{
    firstName:string;
    lastName:string;
    displayFullName():string;
}
class persion implements humaninterface {
    firstName='arati';
    lastName='vaje';
    displayFullName(){
        return this.firstName+' '+this.lastName;
    }
}
var persionObj= new persion;
console.log(persionObj.displayFullName());