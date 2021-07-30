var Human = require('../exercises/human');

class Ogre {
  constructor(ogreObj = {}) {
    this.name = ogreObj.name;
    this.home = ogreObj.abode || "Swamp";
    this.swings = 0;
  }
  encounter(humanObj) {
    humanObj.encounterCounter += 1;
    if (humanObj.noticesOgre()) {
      this.swingAt(humanObj);
    }
  }
  swingAt(humanObj) {
    this.swings += 1;
    humanObj.knockedOut = (this.swings % 2 === 0);
  }
  apologize(humanObj) {
    humanObj.knockedOut = false;
  }
}

module.exports = Ogre;
