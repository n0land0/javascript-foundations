const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkObj = {}) {
    this.name = starkObj.name;
    this.location = starkObj.area || "Winterfell";
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe) {
      return "The North Remembers";
    } else {
      return "Winter is Coming";
    }
  }
  callDirewolf(wolfName, wolfHome) {
    var direwolf = new Direwolf(wolfName, wolfHome = this.location);
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
