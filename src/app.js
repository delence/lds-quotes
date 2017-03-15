const uniqueRandomArray = require('unique-random-array')
const ldsQuotes = require('./lds-quotes.json')
const getRandomQuote = uniqueRandomArray(ldsQuotes);

function random(number) {
    if (number === undefined) {
        return getRandomQuote();
    }
    let randomQuotes = []
    for (let i=1; i<=number; i++) {
        randomQuotes.push(getRandomQuote())
    }
    return randomQuotes
}

module.exports = {
    all: ldsQuotes,
    random: random
}