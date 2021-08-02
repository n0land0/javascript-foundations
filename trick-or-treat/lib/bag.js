class Bag {
  constructor() {
    this.empty = true;
    this.candies = [];
    this.count = 0;
  }
  fill(candyObj) {
    this.candies.push(candyObj);
    this.count = this.candies.length;
  }
  contains(candyType) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candyType) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Bag;
