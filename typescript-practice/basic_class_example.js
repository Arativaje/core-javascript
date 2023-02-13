var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.wishEveryone = function () {
        console.log('Hi everyone, All the best!');
    };
    return sample;
}());
var sampleObj = new sample;
sampleObj.wishEveryone();
