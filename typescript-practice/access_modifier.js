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
var bikes = /** @class */ (function () {
    function bikes() {
    }
    bikes.prototype.displaybikeName = function (bk_name, bk_price) {
        this.bikeName = bk_name;
        this.bikePrice = bk_price;
        console.log(this.bikeName + ' ' + this.bikePrice);
    };
    return bikes;
}());
var newbikes = /** @class */ (function (_super) {
    __extends(newbikes, _super);
    function newbikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newbikes.prototype.displaybikeDetails = function (bkName, bkprice) {
        this.displaybikeName(bkName, bkprice);
    };
    return newbikes;
}(bikes));
// var bikesObj=new bikes;
// // bikesObj.bikeName="hornet";
// // console.log(bikesObj.bikeName);
// bikesObj.displaybikeName('hornet', 100000);
var bikesObj = new newbikes;
bikesObj.displaybikeDetails("hornet", 100000);
