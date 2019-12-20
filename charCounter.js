/*
 *  A node file analyzer.
 *  BY Evan Genest (atom_box  <AT> hotmail dot com)
 *  USEAGE, AT THE COMMMAND LINE TYPE node charCounter myfile.txt WHERE MYFILE.TXT IS ANY VALID PATH
 */

const fs = require('fs');
const contents = fs.readFileSync('./data/abc.txt', 'utf8');
console.log('modernity and');
console.log('its discontents');

// initialize an object to hold results
const result = {
  rawText: '',
  lines: 0,
  allWords: 0,
  chars: {
    all: 0, // including spaces
    spaces: 0,
    alphas: 0,
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
result.rawText = contents;
result.chars.all = contents.length;
result.chars.alphas = contents.match(/[A-z]/g).length;
result.chars.spaces = contents.match(/\ /g).length;
result.chars.digits = contents.match(/[0-9]/g).length;


// print the results
console.log(`Number of lines: ${result.lines}`);
console.log(`Number of characters (total): ${result.chars.all + result.chars.spaces}`);
console.log(`Number of letters: ${result.chars.alphas}`);
console.log(`Number of figures: ${result.chars.digits}`);
console.log(`Number of other characters: ${result.chars.symbols}`);
console.log(`Number of words: ${result.allWords}`);



console.log(`Note: words are assumed to be any combination of chars bounded by a space, terminus, or the following symbols [.,?!"].  This definition of "word" will affect both the defition of word length as well as total number of words.`);

// Keep track of coding time: 5pm to 630, 1015 to 1056
