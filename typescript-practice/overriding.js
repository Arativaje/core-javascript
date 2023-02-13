var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var basicOverridingClass = /** @class */ (function () {
    function basicOverridingClass() {
    }
    basicOverridingClass.prototype.mathOperation = function (a, b) {
        console.log(a + b);
    };
    return basicOverridingClass;
}());
var childOverridingClass = /** @class */ (function (_super) {
    __extends(childOverridingClass, _super);
    function childOverridingClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childOverridingClass.prototype.mathOperation = function (a, b) {
        console.log(a * b);
    };
    return childOverridingClass;
}(basicOverridingClass));
var basicOverridingClassObj = new basicOverridingClass;
basicOverridingClassObj.mathOperation(2, 3);
