const expect = chai.expect
const assert = chai.assert


const myDeck= [];
if (myDeck.length === 52) {
    console.log('The deck has 52 cards.');
  } else {
    console.log('The deck does not have 52 cards.');
  }




describe('Week 6 Lab Tests:', () => {
    describe('Example Question Test: Add Two Numbers', () => {
 
        it('#Should return the sum of two numbers', () => {
            // Copy & paste your debugged code from week6Lab.js
            function addTwoNumbers(num1, num2) {
              return num1 + num2
            }
            // Write tests to ensure it works for multiple examples
            expect(addTwoNumbers(2, 3)).to.equal(5)
            expect(addTwoNumbers(9, 17)).to.equal(26)
            expect(addTwoNumbers(750, 250)).to.equal(1000)
            expect(addTwoNumbers(132780, 443378)).to.equal(576158)
          })
    })
  })

