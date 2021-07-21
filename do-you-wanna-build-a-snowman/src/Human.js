var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(materialsProperty, quantity) {
    if (this.materials.hasOwnProperty(materialsProperty)) {
      this.materials[materialsProperty] += quantity;
    }
  }
  buildASnowman() {
    return new Snowman(this.materials);
  }
  placeMagicHat() {
    var snowman = this.buildASnowman();
    snowman.canWearMagicHat();
    if (snowman.magicHat) {
      return "Woah, this snowman is coming to life!";
    } else {
      return "I guess I didn\'t build it correctly.";
    }
  }
}

module.exports = Human;
