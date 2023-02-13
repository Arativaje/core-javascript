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
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.setbookDetails = function (bName, bPrice, country) {
        this.bookName = bName;
        this.bookPrice = bPrice;
        this.country = country;
    };
    A.prototype.getbookDetails = function () {
        console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country);
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.getbookDetails = function () {
        if (this.country == 'USA') {
            console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country + "USD");
        }
        else if (this.country == 'india') {
            console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country + "INR");
        }
        else {
            _super.prototype.getbookDetails.call(this);
        }
    };
    return B;
}(A));
var Aobj = new B;
Aobj.setbookDetails("Shyamchi Aai", 100, "");
Aobj.getbookDetails();
