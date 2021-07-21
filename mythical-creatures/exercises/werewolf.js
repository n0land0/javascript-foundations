class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "human") {
      this.form = "wolf";
      this.hungry = true;
      return "Aaa-Woooo!";
    } else if (this.form === "wolf") {
      this.form = "human";
      this.hungry = false;
      return "Where are I?";
    }
  }
  eatVictim(victimObj) {
    if (this.form === "wolf") {
      victimObj.alive = false;
      this.form = "human";
      return `Yum, ${victimObj.name} was delicious.`;
    } else if (this.form === "human") {
      return `No way am I eating ${victimObj.name}, I'd like a burger!`
    }
  }
};

module.exports = Werewolf;
