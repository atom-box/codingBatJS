/*
 *  A node file analyzer.
 *  BY Evan Genest (atom_box  <AT> hotmail dot com)
 *  USEAGE, AT THE COMMMAND LINE TYPE node charCounter myfile.txt WHERE MYFILE.TXT IS ANY VALID PATH
 */

const fs = require('fs');
// check for inputted file at CLI
const pathname = process.argv[2];
let fileContents = '';

// open file. confirm correct pathname was requested

function showUserError(){
    console.log(`Your file was not found: [${process.argv[2]}]`);
    console.log(`Please be sure you are running at CLI as NODE CHARCOUNTER.JS FILENAME.TXT.\n`);
}

if (!process.argv[2]){
  showUserError();
  process.exit(1); // no filename requested at all
}

try {
  fileContents = fs.readFileSync(pathname, 'utf8');

}
catch(err) {
  if (err.code === 'ENOENT') {
    showUserError();
    process.exit(1);
  } else {
    console.log('999: unknown error...');
  }
}


// initialize an object to hold results
const result = {
  rawText: '',
  filename: pathname,
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
  lines(){return fileContents.match(/\n/g).length;},
  alphaChars(){return fileContents.match(/[A-z]/g).length;},
  digitChars(){return fileContents.match(/[0-9]/g).length;},
  spaces(){return fileContents.match(/\ /g).length;}
}


// call the methods in FIND object, store in RESULT object
result.rawText = fileContents;
result.chars.all = fileContents.length;
result.chars.alphas = find.alphaChars();
result.chars.spaces = find.spaces();
result.chars.digits = find.digitChars();
result.lines = find.lines;


// print the results
console.log(`Filename: ${result.filename}`);
console.log(`Number of spaces: ${result.chars.spaces}`);
console.log(`Number of characters (total): ${result.chars.all + result.chars.spaces}`);
console.log(`Number of letters: ${result.chars.alphas}`);
console.log(`Number of figures: ${result.chars.digits}`);
console.log(`Number of other characters: ${result.chars.symbols}`);
console.log(`Number of words: ${result.allWords}`);



console.log(`Note: words are assumed to be any combination of chars bounded by a space, terminus, or the following symbols [.,?!"].  This definition of "word" will affect both the defition of word length as well as total number of words.`);

// Keep track of coding time: 5pm to 630, 1015 to 1056
