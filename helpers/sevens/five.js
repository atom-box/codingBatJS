"use strict;"
// UNCOMMENT THIS LINE TO RUN AS NODE import ike from './eisenhower.js';
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
    rightCut = 0,
    leftCut = 0, // span from this to i defines substring
    lines = [];
  while (i < s.length){
    while (s[i] !== ' ' && i > leftCut){
      i = i - 1;
      console.log(`i: ${i} byte: [${s[i]}] looking at: ${s.slice((i - k), i)}`)
    }
    if (i === leftCut){  // found no space!
      rightCut = i + k;
    } else {
      rightCut = i;
    }
    lines.push(s.slice(leftCut, rightCut)  );
    leftCut = rightCut + 1;
    i = rightCut + k;
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
                                                               
let requestLength = 29;
const madeParagraph = formParagraph(muncher(customWidth, ike));


// This EVAN.JS is meant to load into .hmtl but to test it, run from NODE!
// CLI Syntax: node -r esm five.js and one of the switch args below

/*  UNCOMMENT TO RUN AS TEST MODE WITH NODE.JS CLI
if (process.argv[2] !== undefined) {
    const main = {}; // namespace

    switch (process.argv[2]) {
      case 'longstring': 
        console.log (ike);
        break;
      case 'length': 
        console.log ( muncher(75, ike).length);
        break;
      case 'stringtoarray': 
        main.lines = muncher(75, ike);
        console.log(`First line is ${main.lines[0]}`);
        console.log(`In all, made ${main.lines.length} lines`);
        break;
      case 'ike': 
        // Takes two CLI ints:
        // StartingAt, ThisManyLines
        let start = Number(process.argv[3]),
        many = Number(process.argv[4]) + start;
        main.lines = muncher(75, ike);
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
        let customWidth = Number(process.argv[3]);
        let test1 = formParagraph(muncher(customWidth, ike));
        console.log ( test1);
        break;
       default:
        console.log('no optional args recognized');     
    }
}
*/
console.log('Testing finished.')


/*
 _____     ____    __  __ 
 |  __ \   / __ \  |  \/  |
 | |  | | | |  | | | \  / |
 | |  | | | |  | | | |\/| |
 | |__| | | |__| | | |  | |
 |_____/   \____/  |_|  |_|
                           
*/





let sol5 = document.getElementById('solution5');
sol5.innerHTML = `
<form oninput="console.log(33);">
<h3>Set characters per line:</h3>
  <div class="form-group">
    <label for="formControlRange">Slide the controller to create a list with <span id="slider2digits" style="width: 7rem"></span> nodes.</label>
    <input type="range" class="form-control-range" id="slider2"  onchange="twoMain()" value="27" min="13" max="180"    >

  </div>
  <output class="outpanel" id="output5"></output>
<form>
`;




// 5th tab
let code5El = document.getElementById('code5');
code5El.innerHTML = `
<div>
<p>Created at the DEV-Together Meetup with Davi, at Bendyworks.</p>
  <p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/five.js"> solution</a> in javascript</p>
</div>
`;