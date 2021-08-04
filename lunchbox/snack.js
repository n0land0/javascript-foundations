class Snack {
  constructor(snackType) {
    this.type = snackType;
    this.deliciousLevel = "extra";
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    this.amount -= 10;
    if (this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    return this.type.includes("ruit");
  }
}

module.exports = Snack;
