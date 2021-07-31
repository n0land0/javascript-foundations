class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ["Iris"]};
    this.disposition = "Good natured";
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(dressArray) {
    for (var i = 0; i < dressArray.length; i++) {
      this.clothes.dresses.push(dressArray[i]);
    }
  }
  becomeProvoked() {
    this.disposition = "Vengeful";
  }
  replaceInfant(infantObj) {
    if (this.disposition === "Vengeful") {
      infantObj.disposition = "Malicious";
      this.humanWards.push(infantObj);
    }
    if (this.humanWards.length >= 3) {
      this.disposition = "Good natured";
    }
    return infantObj;
  }
}

module.exports = Fairy;
