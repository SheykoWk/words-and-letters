const wordsAndLetters = require('../app').wordsAndLetters;
const assert = require('chai').assert;

describe('Suite test of Word and letter exercice', () => {
    it('Should return 5 that is the lenght of the longest word that can be written using each letter', (done) => {
        const words = ['kellogg', 'go', 'hola', 'lego', 'hug', 'kocomo' ,'hello']
        const letters = ['a', 'h', 'l', 'e', 'l', 'o', 'g', 'k']
        const func = wordsAndLetters(words, letters)
        assert.equal(func, 5)
        done()
    })
})



