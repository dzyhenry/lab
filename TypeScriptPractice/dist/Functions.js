function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
console.log(buildName('a'));
console.log(buildName('a', 'b'));
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=Functions.js.map