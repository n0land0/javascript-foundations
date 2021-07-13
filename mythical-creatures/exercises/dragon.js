class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealCounter = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    // for (var mealCounter = 0; mealCounter < 4; mealCounter++) {
    //   mealCounter+= 1;
    //   if (mealCounter >= 3) {
    //     return this.hungry = false;
    //   }
    // }
    this.mealCounter += 1;
    if (this.mealCounter >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
