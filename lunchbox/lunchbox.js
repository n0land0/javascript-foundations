class LunchBox {
  constructor(lunchboxObj) {
    this.owner = lunchboxObj.owner;
    this.material = lunchboxObj.madeOf;
    this.shape = lunchboxObj.shape;
    this.color = lunchboxObj.color;
    this.snacks = [];
  }
  acquireSnack(snackObj) {
    this.snacks.push(snackObj);
    snackObj.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
