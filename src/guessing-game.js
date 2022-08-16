class GuessingGame {
    constructor() {}

    setRange(min, max) {
this.rightNum = max;
this.leftNum = min;
    }

    guess() {
return this.newRangeBorder = Math.round((this.rightNum + this.leftNum) /2)
    }

    lower() {
    return this.rightNum = this.newRangeBorder
    }

    greater() {
     return this.leftNum = this.newRangeBorder
    }
}

module.exports = GuessingGame;
