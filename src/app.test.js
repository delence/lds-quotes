const expect = require('chai').expect
const quotes = require('./app')

describe('Lds-quotes', function() {
    // it('should work!', function() {
    //     expect(true).to.be.true;
    // })

    describe('all', function() {
        it('should be an array of objects', function() {
            expect(quotes.all).to.satisfy(isArrayOfObjects)

            function isArrayOfObjects(array) {
                return array.every(function(item){
                    return typeof item === 'object'
                })
            }
        })
 
    })

    describe('random', function() {
        it('should return a random quote from quotes,all', function(){
            var randomQuote = quotes.random();
            expect(quotes.all).to.include(randomQuote)
        })
        it('should return a random number of items if passed a number', function() {
            var randomQuotes = quotes.random(2);
            expect(randomQuotes).to.have.length(2);
            randomQuotes.forEach(function(quote) {
                expect(quotes.all).to.include(quote);
            })
        })
    })

});