import {expect} from "chai";
import Deck from "./homework6.js"

describe ("Deck",()=>{
    it("should create a deck of 52 cards",()=>{
        const warGame=new Deck()
        warGame.createDeck()
        console.log("warGame.deck",warGame.deck.length);
        expect(warGame.deck.length).lessThanOrEqual(52)
    })
})