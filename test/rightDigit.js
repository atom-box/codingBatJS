// Given a list of non-negative integers, return an integer list of the rightmost digits. (Note: use %)
// https://codingbat.com/prob/p152194 
// https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha 
console.log('Been to Germany!');

var expect    = require("chai").expect;
var thingtotest = require("../rightDigit.js");
console.log('111' + typeof thingtotest.rightDigit);
console.log('222' + Object.keys(thingtotest.rightDigit).toString());
console.log('333' + Object.keys(thingtotest.rightDigit).length);
describe('Digit getter', () => {
    it('gets just the last digit of each', () =>{
        
            var blueHex  = thingtotest.rightDigit([1, 22, 93]);
            expect(blueHex).to.equal([]);
        })
});


// rightDigit([1, 22, 93]); // [1, 2, 3]
// rightDigit([16, 8, 886, 8, 1]); // [6, 8, 6, 8, 1]
// rightDigit([10, 0]); // [0, 0]
