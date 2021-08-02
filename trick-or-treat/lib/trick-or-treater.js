// var Bag = require('../lib/bag');
// var Candy = require('../lib/candy');

class TrickOrTreater {
  constructor(costumeObj, bagObj) {
    this.dressedUpAs = costumeObj.style;
    this.bag = bagObj;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candyObj) {
    this.hasCandy = true;
    this.bag.fill(candyObj);
    this.countCandies += 1;
  }
  eat() {
    this.bag.candies.shift();
    this.countCandies -= 1;
  }
}

module.exports = TrickOrTreater;
