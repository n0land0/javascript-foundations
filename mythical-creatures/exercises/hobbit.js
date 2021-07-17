class Hobbit {
  constructor(obj) {
    this.name = obj.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday(years = 1) {
    this.age += years;
    this.adult = (this.age >= 33);
    this.old = (this.age >= 101);
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      return "You can\'t have it!";
    }
  }
}



module.exports = Hobbit;
