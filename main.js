function countVowels(string) {
  if(typeof string !== 'string')
    return "Invalid string"
  return string
    .toLowerCase()
    .split('')
    .reduce((acc, letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter) ? ++acc : acc, 0);

}

module.exports = countVowels;
