var human = /** @class */ (function () {
    function human() {
    }
    human.prototype.displayName = function () {
        console.log('My name is arati');
    };
    return human;
}());
var humanObj = new human;
humanObj.displayName();
