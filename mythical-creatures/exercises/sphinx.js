class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddleObj) {
    this.riddles.push(riddleObj);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(answerString) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answerString) {
        if (this.riddles.length === 1) {
          var response = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${this.riddles[i].answer}"???`;
        } else {
          var response = 'That wasn\'t that hard, I bet you don\'t get the next one';
        }
        this.riddles.splice(i, 1);
        return response;
      }
    }
    this.heroesEaten += 1;
  }
}

module.exports = Sphinx;
