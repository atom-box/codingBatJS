"use strict;"
import ike from './eisenhower.js';
// gotta run as node -r esm five.js to get import to work
const longString = ike;


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
       default:
        console.log('no optional args recognized');     
    }
}
console.log('Testing finished.')

