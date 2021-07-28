class GolfCourse {
  constructor(name, difficulty, openings, features = []) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(groupArray) {
    if (groupArray.length <= this.openings) {
      for (var i = 0; i < groupArray.length; i++) {
        this.currentlyPlaying.unshift(groupArray[i].name);
      }
      this.openings -= groupArray.length;
      return 'You\'re checked in. Have fun!';
    } else if (groupArray.length > this.openings) {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
}

module.exports = GolfCourse;
