function buildName(firstName: string, lastName = "Smith"): string {
  return `${firstName} ${lastName}`;
}
// console.log(buildName('a', 'b', 'c'));
console.log(buildName('a'));
console.log(buildName('a', 'b'));

/**
 * Arrow functions capture the this where the function is created rather than where it is invoked
 */
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);