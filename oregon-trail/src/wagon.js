class Wagon {
  constructor(wagonObj) {
    this.title = wagonObj.name;
    this.wheels = wagonObj.wheels || [];
    this.axles = wagonObj.axles || [];
    this.oxen = wagonObj.oxen || [];
    this.yokes = wagonObj.yokes || [];
    this.settlers = wagonObj.settlers || [];
    this.food = wagonObj.food;
    this.ammunition = wagonObj.ammunition;
    this.clothes = wagonObj.clothes;
    this.keys = Object.keys(this);
  }
  addPart(partObj) {
    // for (var i = 0; i < Object.keys(this).length; i++) {
    for (var i = 0; i < this.keys.length; i++) {
      // if (Object.keys(this)[i].includes(partObj.type)) {
      if (this.keys[i].includes(partObj.type)) {
          // this[Object.keys(this)[i]].push(partObj);
          this[this.keys[i]].push(partObj);
      }
    }
  }
  canTravel() {
    if (this.wheels.length < 4 ||
    this.axles.length < 2 ||
    this.oxen.length < 2 ||
    this.yokes.length < 1 ||
    this.settlers.length < 1 ||
    (this.oxen.length / this.yokes.length) > 2) {
      return false;
    }
    for (var i = 0; i < this.keys.length - 3; i++) {
      var currentProperty = this[this.keys[i]];
      for (var j = 0; j < currentProperty.length; j++) {
        if (currentProperty[j].broken) {
          return false;
        } else if (currentProperty[j].status === "dead") {
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = Wagon;


// Passing in a wagon obj with 2 part objects in its wheels property
