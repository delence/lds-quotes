const uniqueRandomArray = require('unique-random-array')
var ldsQuotes = require('./lds-quotes.json')

module.exports = {
    all: ldsQuotes,
    random: uniqueRandomArray(ldsQuotes)
}