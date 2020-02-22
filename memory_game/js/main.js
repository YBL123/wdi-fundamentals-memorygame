let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];
let matchCounter = 0;
let gameScore = 0;
//reset//
let reset = function () {
  for (let i = 0; i < cards.length; i++){
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  matchCounter = 0;
};

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // while there remain elements to shuffle
  while (0 !== currentIndex) {

  //pick a remaining elements
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  //and swap it with current element
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkForMatch() {
  if (cardsInPlay.length >= 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert ("you found a match!");
      matchCounter += 1;

   if (matchCounter === (cards.length / 2)) {
     alert("Congratulations, You Win!");
     gameScore += 1;
     document.getElementById("game-score-js").innerHTML = '<span class="score">Game Score ' + gameScore+'</span>';
     cards = shuffle(cards);
     reset();
     //reset
     //reset();
   }

      } else {
      alert ("Sorry, try again.");
      //reset
      reset();
    }
 }
};


function flipCard() {

  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank + " " + "of " + cards[cardId].suit);

  if (cardsInPlay.length >= 2) {
    cardsInPlay = [];
  }

cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);
setTimeout(function(){ checkForMatch(); }, 300);

  //console.log(cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
}

let cardElement;

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
//defines reset button
let button = document.getElementById('button');
button.addEventListener('click', reset);

createBoard();
