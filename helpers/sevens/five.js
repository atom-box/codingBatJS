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
                                   
function muncher (k, s){
  let i = k,  // an index pointing to the raw string
   recentCut = 0, // span from this to i defines substring
   lines = [];
  while (i < s.length){
    while (s[i] !== ' ' && i > 0){
      i--  
    }
    let nChars = i - recentCut;
    lines.push(s.slice(recentCut, nChars)  );
    recentCut = i;
    i = i + k;
  } 
  return lines;
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
    switch (process.argv[2]) {
      case 'length': 
        console.log ( longString.length);
        break;
      case 'stringtoarray': 
        const main = {};
        main.lines = muncher(80, ike);
        console.log(`First line is ${main.lines[0]}`);
        console.log(`In all, made ${main.lines.length} lines`);
        break;
       default:
        console.log('no optional args recognized');     
    }
}
console.log('Testing finished.')

