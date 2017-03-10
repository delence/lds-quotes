const uniqueRandomArray = require('unique-random-array')
const ldsQuotes = require('./lds-quotes.json')

module.exports = {
    all: ldsQuotes,
    random: uniqueRandomArray(ldsQuotes)
}