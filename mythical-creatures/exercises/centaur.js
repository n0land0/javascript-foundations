class Centaur {
  constructor(obj) {
    this.name = obj.name;
    this.breed = obj.type;
    this.crankyCounter = 0;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }
  shootBow() {
    this.crankyCounter += 1;
    if (this.crankyCounter >= 3) {
      this.cranky = true;
      return "NO!";
    }
    return "Twang!!!";
  }
  run() {
    this.crankyCounter += 1;
    if (this.crankyCounter >= 3) {
      this.cranky = true;
      return "NO!";
    }
    return "Clop clop clop clop!!!";
  }
  sleep() {
    if (this.standing) {
      return "NO!";
    } else {
      this.cranky = false;
      this.crankyCounter = 0;
      return "ZZZZ";
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
    this.crankyCounter += 3;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    this.cranky = false;
    this.crankyCounter = 0;
    if (!this.standing) {
      return "Not while I\'m laying down!";
    }
  }
};

module.exports = Centaur;
