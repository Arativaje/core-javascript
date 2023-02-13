// class basicSettersAndGetters {
//     firstName:string;
//     one() {
//         this.firstName='arati';
//     }
//     two() {
//         this.firstName='maayra';
//     }
// }
class basicSettersAndGetters {
    firstName:string;
    lastName:string;
    setName(fname:string, lname:string){
        this.firstName=fname;
        this.lastName=lname;
    }
    getName(){
        
        return (this.firstName +' ' + this.lastName);
    }
}
var basicSettersAndGettersObj= new basicSettersAndGetters;
basicSettersAndGettersObj.setName("Arati","vaje");
var name1=basicSettersAndGettersObj.getName();
console.log(name1);
