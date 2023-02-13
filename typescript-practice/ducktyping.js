var firstPerson = /** @class */ (function () {
    function firstPerson() {
        this.firstName = 'arati';
        this.lastName = 'vaje';
    }
    firstPerson.prototype.displayName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return firstPerson;
}());
var firstPersonObj = new firstPerson;
console.log(firstPersonObj.displayName());
var basicObjNew = {
    firstName: 'Maayra',
    lastName: 'vaje',
    displayName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(basicObjNew.displayName());
// firstPersonObj=basicObjNew;
console.log(firstPersonObj.displayName());
