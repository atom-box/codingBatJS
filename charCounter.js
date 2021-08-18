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
  wordsArray: [],
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
  spaces(){return fileContents.match(/\ /g).length;},

  // SYMBOLS uses functions reduntantly, so it won't break if the data object gets changed someday
  symbols(){return fileContents.length - this.alphaChars() - this.digitChars() - this.spaces() },
  // accept array of words,return a tally of words size n
  size(words, size){
    return words.reduce((total, item)=>{console.log('item size in reduce is ' + item.length + ' looking for size ' + size); if (item.length === Number(size)){total = (total || 0) + 1}; return total  }, 0 );
  }
}



/*
 _____  ____   _  _   ___   _  _    ___   ____   ___  
)__ __(/ __ \ ) |) / ) __( ) \/ (  )_ _( )___ ( ) __( 
  | |  ))__(( | ( (  | _)  |  \ |  _| |_   / /_ | _)  
  )_(  \____/ )_|)_\ )___( )_()_( )_____( )____()___( 
*/
//  The next 50 lines are all for tokenizing!


// BREAK RAW STRING INTO ARRAY OF WORDS
function stringToWords(s){
// accept the raw string, tokenize, clean the boundaries of each word, return an array of words
// this method does not remove a symbol or digit if it is trapped within a word
  let results = [];
  // s = s.replace('\n', ' ');
  results = s.split(/\s/); 
  results = results.map( (item)=>{return leftNibbler(item)}  );
  results = results.map( (item)=>{return rightNibbler(item)}  );
  let accumulator = [];
  results = results.reduce((total, word) => {
    if (word.length > 0){ total.push(word)}
    return total;
  }, []);

  // results = results.reduce( (total, item)=>{if (item.length > 0) { return total.push(item)} });
  return results;
}

// REMOVE LEADING SYMBOLS
function leftNibbler(w){
// accept a word, remove non alpha chars from left, return the clean word
while (w.length > 0){
  if (w[0].match(/[A-Za-z]/)) {
    console.log('good looking char: ' + w[0]);
    return w;
  } else {
    console.log('bad looking char: ' + w[0]);
    w = w.substr(1);
  }
} 
return '';
}

// REMOVE TRAILING SYMBOLS
function rightNibbler(w){
// accept a word, remove non alpha chars from left, return the clean word
while (w.length > 0){
  console.log('right nibbler about to check ' + w[w.length -1]);
  if (w[w.length-1].match(/[A-Za-z]/)) {
    console.log('good looking char: ' + w[w.length -1]);
    return w;
  } else {
    console.log('bad looking char: ' + w[0]);
    let lengthToKeep = w.length -1;
    w = w.substr(0, lengthToKeep);
  }
} 
return '';
}
// END TOKENIZING







// call the methods in FIND object, store in RESULT object
result.rawText = fileContents;
result.chars.all = fileContents.length;
result.chars.alphas = find.alphaChars();
result.chars.spaces = find.spaces();
result.chars.digits = find.digitChars();
result.lines = find.lines() + 1; 
result.spaces = find.spaces();
result.symbols = find.symbols();
result.wordsArray = stringToWords(fileContents);
result.allWords = result.wordsArray.length;
for(let i = 1; i < 17; i++){
  result[i] = find.size(result.wordsArray, i);
  console.log(`yay ${i}! Found: ${result[i]}, looked at ${result.wordsArray.length} words;`);
}

// print the results
console.log(`Filename: ${result.filename}`);
console.log(`Number of lines: ${result.lines}`);
// console.log(`Number of spaces: ${result.chars.spaces}`);
console.log(`Number of characters (total): ${result.chars.all + result.chars.spaces}`);
console.log(`Number of letters: ${result.chars.alphas}`);
console.log(`Number of figures: ${result.chars.digits}`);
console.log(`Number of other characters: ${result.symbols}`);
console.log(`Number of words: ${result.allWords}`);
console.log(`Length one words: ` + result[1]);
console.log(`Length two words: ` + result[2]);
console.log(`Length three words: ` + result[3]);

console.log(`Note: words are assumed to be any combination of chars bounded by a space, terminus, or the following symbols [.,?!"].  This definition of "word" will affect both the defition of word length as well as total number of words.`);

// console.log(stringToWords(fileContents));
// Keep track of coding time: 5pm to 630, 1015 to 1056 630 to 930 am
