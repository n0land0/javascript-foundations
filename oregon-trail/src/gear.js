class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }
  checkForValidity() {
    if (this.type === "food" || this.type === "clothes" || this.type === "ammunition") {
      var response = `Great, we'll need lots of ${this.type}!`;
    } else {
      var response = `I don\`t think a ${this.type} will help us.`;
      this.type = null;
    }
    return response;
  }
}

module.exports = Gear;
