class Settler {
  constructor(settlerObj) {
    this.name = settlerObj.name;
    this.age = settlerObj.age;
    this.nationality = settlerObj.nationality || "unknown";
    this.status = "healthy";
    this.ailments = [];
  }
  experienceDistress(ailment) {
    if (this.status !== "dead") {
      this.ailments.push(ailment);
    }
    if (this.ailments.length === 1) {
      this.status = "fair";
    } else if (this.ailments.length === 2) {
      this.status = "poor";
    } else if (this.ailments.length === 3) {
      this.status = "dead";
    }
  }
  heal() {
    if (this.status !== "dead") {
      this.ailments = [];
      this.status = "healthy";
    } else {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}

module.exports = Settler;
