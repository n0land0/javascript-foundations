class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victimObj) {
    var personToStatue = new Statue(victimObj.name);
    this.statues.push(personToStatue);
    if (this.statues.length > 3) {
      // this.statues[0] = new Person(this.statues[0].name);
      var statueToPerson = new Person(this.statues[0].name);
      statueToPerson.mood = "relieved";
      console.log(this.statues[0]);
      this.statues.shift();
      return statueToPerson;
    }
  };
};

var Person = require('./person');
var Statue = require('./statue');

module.exports = Medusa;
