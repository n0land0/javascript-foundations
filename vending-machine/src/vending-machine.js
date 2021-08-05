class VendingMachine {
  constructor(machineDetails) {
    this.id = machineDetails.id;
    this.isBroken = machineDetails.isBroken;
    this.snacks = [];
  }
  addSnacks(snackObj) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snackObj.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.';
      }
    }
    this.snacks.push(snackObj);
  }
  purchaseSnack(snackName, money) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snackName && this.snacks[i].itemsInStock > 0) {
        if (this.snacks[i].price <= money) {
          this.snacks[i].removeItem();
          return `Success! Here is $${money - this.snacks[i].price} back!`;
        } else {
          return 'Sorry, not enough payment. Please add more money.';
        }
      }
    }
    return 'Sorry, no items in stock. Try another item.';
  }
}

module.exports = VendingMachine;
