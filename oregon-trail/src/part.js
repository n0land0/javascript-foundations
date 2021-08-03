class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.brokenCounter = 0;
  }
  break() {
    this.broken = true;
    this.brokenCounter += 1;
  }
  repair() {
    if (this.brokenCounter >= 2) {
      return `This ${this.type} has seen better days, we'll need a brand new one!`
    } else {
      this.broken = false;
    }
  }
}

module.exports = Part;
