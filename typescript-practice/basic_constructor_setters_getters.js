var basicConstructorSettersAndGetters = /** @class */ (function () {
    function basicConstructorSettersAndGetters(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    basicConstructorSettersAndGetters.prototype.getName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
    return basicConstructorSettersAndGetters;
}());
var basicConstructorSettersAndGettersObj = new basicConstructorSettersAndGetters('Arati', 'vaje');
basicConstructorSettersAndGettersObj.getName();
