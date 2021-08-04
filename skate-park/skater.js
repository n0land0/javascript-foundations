class Skater {
  constructor(skaterObj) {
    this.name = skaterObj.name;
    this.skill = skaterObj.skill;
    this.tricks = skaterObj.tricks;
    this.money = skaterObj.cash;
    this.frustration = 0;
  }
  practice(trickString) {
    if (!this.tricks[trickString]) {
      this.frustration += 1;
    }
    if (this.frustration >=3) {
      this.tricks[trickString] = true;
      this.frustration = 0;
      return `I just learned to ${trickString}!!!`
    }
  }
}

module.exports = Skater;
