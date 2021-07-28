class Direwolf {
  constructor(wolfName, wolfHome = "Beyond the Wall", wolfSize = "Massive") {
    this.name = wolfName;
    this.home = wolfHome;
    this.size = wolfSize;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(starkObj) {
    if (this.home === starkObj.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(starkObj);
      starkObj.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(starkObj) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] === starkObj) {
        this.starksToProtect.splice(i,1);
        starkObj.safe = false;
      }
    }
  }
}

module.exports = Direwolf;
