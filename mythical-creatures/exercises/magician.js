class Magician {
    constructor(obj) {
      this.name = `The Great ${obj.name}`;
      this.assistant = obj.assistant;
      this.favoriteAccessory = (obj.clothing || "top hat");
      this.confidencePercentage = 10;
    }
    performIncantation(spell) {
      return spell.toUpperCase() + "!";
    }
    performTrick() {
      if (this.confidencePercentage < 100) {
        this.confidencePercentage += 10;
      }
      if (this.favoriteAccessory === "top hat") {
        return "PULL RABBIT FROM TOP HAT";
      } else {
        return "PULL DOVE FROM SLEEVE";
      }
    }
    performShowStopper() {
      if (this.confidencePercentage === 100 && this.assistant) {
        return "WOW! The magician totally just sawed that person in half!";
      }
      else {
        return "Oh no, this trick is not ready!";
      }
    }
}

module.exports = Magician;
