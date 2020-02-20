let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

flipCard(0);
flipCard(2);

function checkForMatch() {
  if (cardsInPlay.length >=2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("you found a match!");
} else {
  console.log("Sorry, try again.");
   }
 }
}

function flipCard(cardId) {
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);
checkForMatch();
}
