var Skier = require("../src/Skierr");

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = "up";
  }
  admitSkier(skierName, hasLiftTicket) {
    if (!hasLiftTicket) {
      return `Sorry, ${skierName}. You need a lift ticket!`
    } else if (this.skiers.length >= this.limit) {
      return `Sorry, ${skierName}. Please wait for the next lift!`;
    } else {
      this.skiers.push(new Skier(skierName, hasLiftTicket));
    }
  }
  startLift() {
    if (this.skiers.length >= this.limit) {
      this.safetyBar = "down";
    } else if ((this.limit - this.skiers.length) > 1) {
      return `We still need ${this.limit - this.skiers.length} more skiers!`;
    } else {
      return `We still need ${this.limit - this.skiers.length} more skier!`;
    }
  }
}

module.exports = Lift;
