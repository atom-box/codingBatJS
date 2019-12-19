/*
 *  A node file analyzer.
 *  BY Evan Genest (atom_box  <AT> hotmail dot com)
 *  USEAGE, AT THE COMMMAND LINE TYPE node charCounter myfile.txt WHERE MYFILE.TXT IS ANY VALID PATH
 */

var fs = require('fs');
var contents = fs.readFileSync('./data/abc.txt', 'utf8');
console.log('modernity and');
console.log('its discontents');

// initialize an object to hold results
const result = {
  rawText: '',
  length: 0,
  words: 0,
  chars: {
    all: 0, // but not spaces
    spaces: 0,
    alpha: 0,
    digits: 0,
    symbols: 0
  },
  wordCountByWordlength: {
    // big nebulousness; defn of "word" unclear
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    19: 0
  }
}

// define the methods
const find = {
  nonSpaces(){return 13;},
  alphaChars(){return 32;},
  digitChars(){return 42;}
}

// call the methods



// print the results
console.log(result.chars.all);



console.log(`Note: words are assumed to be any combination of chars bounded by a space, terminus, or the following symbols [.,?!"].  This definition of "word" will affect both the defition of word length as well as total number of words.`);

// Keep track of coding time: 5pm to 630
