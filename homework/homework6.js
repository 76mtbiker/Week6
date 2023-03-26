
console.log('week6 War Game');

// player class
class Player {
  constructor(playerName, playerHand, score) {
    this.playerName = playerName;
    this.playerHand = playerHand;
    this.score = 0;
  }
}

// card class
class Card {
  constructor(faceValue, suit, rank) {
    this.faceValue = faceValue;
    this.suit = suit;
    this.rank = rank;
  }
}

// deck class
class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    let faceValues = [2,3,4,5,6,7,8,9,10, 'Jack', 'Queen','King','Ace'];
    let suits = ['hearts','diamonds', 'clubs', 'spades'];

    for(let faceValIndex = 0; faceValIndex < faceValues.length; faceValIndex++) {
      for(let suitsValIndex = 0; suitsValIndex < suits.length; suitsValIndex++){
        this.deck.push(new Card(faceValues[faceValIndex], suits[suitsValIndex],(faceValIndex +2)));
      }
    }
    console.log(this.deck[0].faceValue);
  }

  shuffleDeck() {
    for(let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      let tempIndex = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = tempIndex;
    }
    console.log(this.deck);
  }
}

// game logic class
class GameLogic {
  constructor() {
    this.player1 = new Player('jerry', [], 0);
    this.player2 = new Player('jason', [], 0);
    console.log(this.player1, this.player2);

    // create instance of deck
    this.gameDeck = new Deck();
  }

  startGame() {
    this.gameDeck.createDeck();
    this.gameDeck.shuffleDeck();
  }

  dealDeck() {
    this.player1.playerHand = this.gameDeck.deck.slice(0, 26);
    this.player2.playerHand = this.gameDeck.deck.slice(26, 52);
    console.log(this.player1, this.player2);
  }

  compareCard() {
    for(let i = 0; i < 26; i++) {
      if(this.player1.playerHand[i].rank > this.player2.playerHand[i].rank) {
        this.player1.score++;
      } else if(this.player1.playerHand[i].rank < this.player2.playerHand[i].rank) {
        this.player2.score++;
      } else {
        console.log('Tie!');
      }

      console.log(`${this.player1.playerName} played a ${this.player1.playerHand[i].faceValue} of ${this.player1.playerHand[i].suit}`);
      console.log(`${this.player2.playerName} played a ${this.player2.playerHand[i].faceValue} of ${this.player2.playerHand[i].suit}`);
      console.log(`Score:\n${this.player1.playerName} score: ${this.player1.score}\n${this.player2.playerName} score: ${this.player2.score}`);
    }
  }
}

let newGame = new GameLogic();
newGame.startGame();
newGame.dealDeck();
newGame.compareCard()