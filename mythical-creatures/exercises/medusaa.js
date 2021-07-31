class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(personObj) {
    this.statues.push(new Statue(personObj.name));
    if (this.statues.length > 3) {
      var statueToPerson = new Person(this.statues[0].name);
      statueToPerson.mood = "relieved";
      this.statues.shift();
      return statueToPerson;
    }
  }
}

var Statue = require('../exercises/statuee');
var Person = require('../exercises/personn');


module.exports = Medusa;
