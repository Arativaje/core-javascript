class basicConstructorSettersAndGetters {
    firstName:string;
    lastName:string;
    constructor(fname:string, lname:string){
        this.firstName=fname;
        this.lastName=lname;
    }
    getName(){
        
        console.log(this.firstName +' ' + this.lastName);
    }
}
var basicConstructorSettersAndGettersObj= new basicConstructorSettersAndGetters('Arati','vaje');

basicConstructorSettersAndGettersObj.getName();