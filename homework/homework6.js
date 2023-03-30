
console.log('week6 War Game');

// player class
class Player {//Has three properties, player name, player hand and score.
  constructor(playerName, playerHand, score) {
    this.playerName = playerName;//stores name of the player
    this.playerHand = playerHand;//stores an array of cards that the player  holds
    this.score = 0;//stores the players current score
  }
}

// card class
class Card { //has three properties, faceValue, suit, and rank
  constructor(faceValue, suit, rank) {
    this.faceValue = faceValue;//stores the face value of the card
    this.suit = suit;//stores the suit of the card
    this.rank = rank;//stores the rank of the card
  }
}

// deck class
class Deck {//Has one property,(deck) which is an array that stores all the cards in the deck
  constructor() {
    this.deck = [];
  }

  createDeck() {//This is a method for the deck class, create deck, and shuffle deck
    let faceValues = [2,3,4,5,6,7,8,9,10, 'Jack', 'Queen','King','Ace'];//The create deck method populates the deck with all possible cards using nested loops
    let suits = ['hearts','diamonds', 'clubs', 'spades'];

    for(let faceValIndex = 0; faceValIndex < faceValues.length; faceValIndex++) {
      for(let suitsValIndex = 0; suitsValIndex < suits.length; suitsValIndex++){
        this.deck.push(new Card(faceValues[faceValIndex], suits[suitsValIndex],(faceValIndex +2)));
      }
    }
    console.log(this.deck[0].faceValue);
  }

  shuffleDeck() {//This method is for the deck class. This method shuffles the deck randomly using the Fisher Yates shuffle algorithm
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
class GameLogic {//This class is the main game logic, it contols the flow of the game
  constructor() {//It creates two players, a deck of cards, and has methods to start the game, deal the cards, and compare the cards to determine a winner
    this.player1 = new Player('jerry', [], 0);//
    this.player2 = new Player('jason', [], 0);
    console.log(this.player1, this.player2);

    // create instance of deck
    this.gameDeck = new Deck();
  }

  startGame() {//This method creates a new deck of cards and shuffles it
    this.gameDeck.createDeck();
    this.gameDeck.shuffleDeck();
  }

  dealDeck() {//this method, deals the cards from the shuffled deck to both players
    this.player1.playerHand = this.gameDeck.deck.slice(0, 26);
    this.player2.playerHand = this.gameDeck.deck.slice(26, 52);
    console.log(this.player1, this.player2);
  }

  compareCard() {//this method compares the cards held by both players and increments the score of the player with the higher ranked card.
    for(let i = 0; i < 26; i++) {//If both cards have the same rank, this method, logs a message saying that there was a tie
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

let newGame = new GameLogic();//this program creates a new instance of the Gamelogic class and calls the 
newGame.startGame();//the start game method, dealDeck method, and compareCard method to start the game
newGame.dealDeck();
newGame.compareCard()
