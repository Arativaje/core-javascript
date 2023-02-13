// class basicSettersAndGetters {
//     firstName:string;
//     one() {
//         this.firstName='arati';
//     }
//     two() {
//         this.firstName='maayra';
//     }
// }
var basicSettersAndGetters = /** @class */ (function () {
    function basicSettersAndGetters() {
    }
    basicSettersAndGetters.prototype.setName = function (fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    };
    basicSettersAndGetters.prototype.getName = function () {
        return (this.firstName + ' ' + this.lastName);
    };
    return basicSettersAndGetters;
}());
var basicSettersAndGettersObj = new basicSettersAndGetters;
basicSettersAndGettersObj.setName("Arati", "vaje");
var name1 = basicSettersAndGettersObj.getName();
console.log(name1);
