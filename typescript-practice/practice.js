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
var parentA = /** @class */ (function () {
    function parentA() {
    }
    parentA.prototype.setBookName = function (bname, bprice) {
        this.bookName = bname;
        this.bookPrice = bprice;
    };
    parentA.prototype.getBookPrice = function () {
        console.log(this.bookName + '' + this.bookPrice);
    };
    return parentA;
}());
var childB = /** @class */ (function (_super) {
    __extends(childB, _super);
    function childB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childB.prototype.setAuthorName = function (authorName) {
        this.author = authorName;
    };
    childB.prototype.getBookInfo = function () {
        console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.author);
    };
    return childB;
}(parentA));
var childObj = new childB;
childObj.setBookName("Agnipankh", 200);
childObj.setAuthorName("A.P.J. Abdul Kalam");
childObj.getBookInfo();
