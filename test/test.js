var chai = require('chai')
var assert = chai.assert
var countVowels = require('../main')

describe('countVowels', function () {
  it('should return the number of vowels in a string', function () {
    var input = 'Hello Tests!'
    assert.equal(countVowels(input), 3)
  })

  it('should return 0 if an empty string is passed', function () {
    var input = ''
    assert.equal(countVowels(input), 0)
  })

  it('should not include "y" in the vowel count', function () {
    var input = 'You know "Y" is not a vowel, right?'
    assert.equal(countVowels(input), 9)
  })

  it('should be able to count upper and lower case vowels', function () {
    var input = 'AaEeIiOoUu'
    assert.equal(countVowels(input), 10)
  })

  it('should return 0 if no vowels are in the string', function () {
    var input = 'Zzzzzz'
    assert.equal(countVowels(input), 0)
  })

  it('should return "Invalid string" if a number is passed as input', function () {
    var input = 100
    assert.equal(countVowels(input), "Invalid string")
  })

  it('should return "Invalid string" if an object passed as input', function () {
    var input = {}
    assert.equal(countVowels(input), "Invalid string")
  })
})
