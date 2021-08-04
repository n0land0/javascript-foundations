class SkatePark {
  constructor(parkObj) {
    this.name = parkObj.name;
    this.yearFounded = parkObj.year;
    this.style = parkObj.type;
    this.features = parkObj.features;
    this.isPrivate = parkObj.isPrivate || false;
    this.cost = parkObj.price || 0;
    this.occupants = [];
  }
  admit(skaterObj) {
    this.occupants.push(skaterObj);
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    }
    if (this.isPrivate) {
      if (skaterObj.money >= this.cost) {
        skaterObj.money -= this.cost;
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
      } else {
      return `Sorry, you don't have enough money.`;
      }
    } else {
      return `Welcome to the free ${this.name} Skatepark!`;
    }
  }
}

module.exports = SkatePark;
