var persion = /** @class */ (function () {
    function persion() {
        this.firstName = 'arati';
        this.lastName = 'vaje';
    }
    persion.prototype.displayFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return persion;
}());
var persionObj = new persion;
console.log(persionObj.displayFullName());
