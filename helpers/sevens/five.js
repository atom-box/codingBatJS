"use strict;"
import ike from './eisenhower.js';
// gotta run as node -r esm five.js to get import to work
const longString = ike;

 //   __                              
 //  / _|                             
 // | |_   _   _   _ __     ___   ___ 
 // |  _| | | | | | '_ \   / __| / __|
 // | |   | |_| | | | | | | (__  \__ \
 // |_|    \__,_| |_| |_|  \___| |___/
                                   
// Accepts requestedlinelength as k, jumbostring as s
// Returns an array of stringlines
function muncher (k, s){
  let i = k,  // an index pointing to the raw string
   recentCut = 0, // span from this to i defines substring
   lines = [];
  while (i < s.length){
    console.log(`Line 20  *** ${i}`)
    while (s[i] !== ' ' && i > 0){
      console.log(`i  is  ${i}`)
      i = i - 1  
    }
    let endCut = i;
    console.log(`Now grabbing from [${recentCut}] to [${endCut}]${s.slice(recentCut, endCut ) }`)
    lines.push(s.slice(recentCut, endCut)  );
    recentCut = i;
    i = i + k;
  } 
  return lines;
}

// Accepts: an array of stringlines
// Returns: array of paragraphs, each as a newlineformatted string
function formParagraph( arr){
  return arr.join('\n')
}




 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
// This EVAN.JS is meant to load into .hmtl but to test it, run from NODE!
// CLI Syntax: node -r esm five.js and one of the switch args below
if (process.argv[2] !== undefined) {
    const main = {}; // namespace

    switch (process.argv[2]) {
      case 'longstring': 
        console.log (ike);
        break;
      case 'length': 
        console.log ( muncher(25, ike).length);
        break;
      case 'stringtoarray': 
        main.lines = muncher(25, ike);
        console.log(`First line is ${main.lines[0]}`);
        console.log(`In all, made ${main.lines.length} lines`);
        break;
      case 'ike': 
        // Takes two CLI ints:
        // StartingAt, ThisManyLines
        let start = Number(process.argv[3]),
        many = Number(process.argv[4]) + start;
        main.lines = muncher(25, ike);
        console.log(`Start Ike liners with [${start}] [${many}]:`)
        for (let i = start; i < many; i++){
          console.log(`HERE ${i}: ${main.lines[i]}`)
        }
        console.log('...end Ike liners.')
        break;
      case 'davi': 
        console.log ( formParagraph(["Only an alert and", "knowledgeable citizenry ", "can compel the proper meshing ", "of the huge industrial ", "and military ", "machinery of defense ", "with our peaceful ", "methods and goals"]));
        break;
      case 'breakmake': 
        let test1 = formParagraph(muncher(25, ike))
        console.log ( test1);
        break;
       default:
        console.log('no optional args recognized');     
    }
}
console.log('Testing finished.')

