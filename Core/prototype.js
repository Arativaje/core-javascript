Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
  
var fruits = ["banana","orange", "kiwi", "lemon","mongo"];
var fruits1 = fruits.myUcase();

console.log(fruits1);