"use strict;"
// UNCOMMENT THIS LINE TO RUN AS NODE import ike from './eisenhower.js' in which case,
// gotta run as node -r esm five.js to get import to work
const longString = ike;
console.log(ike.length);
let madeParagraph ='';
 //   __                              
 //  / _|                             
 // | |_   _   _   _ __     ___   ___ 
 // |  _| | | | | | '_ \   / __| / __|
 // | |   | |_| | | | | | | (__  \__ \
 // |_|    \__,_| |_| |_|  \___| |___/
                                   
function muncher(k, s){
  console.log( `Muncher(k, s) received ${k} and ${s}...`);
  let i = k,  // an index pointing to the raw string
    rightCut = 0,
    leftCut = 0, // span from this to i defines substring
    lines = [];
  while (i < s.length){
    while (s[i] !== ' ' && i > leftCut){
      i = i - 1;
      console.log(`The char at: ${i} is [${s[i]}] Slice pondered: ${s.slice(leftCut, i)}`)
    }
    console.log(`LINE 26 i, leftCut, rightCut ${i}, ${leftCut}, ${rightCut}`);
    if (i === leftCut){  // found no space!
      rightCut = i + k;
    } else {
      rightCut = i;
    }
    console.log(`LINE32 i, leftCut, rightCut ${i}, ${leftCut}, ${rightCut}`);
    lines.push(s.slice(leftCut, rightCut)  );
    leftCut = rightCut;
    console.log(`i k rightCut ARE instances of ${typeof i} & ${typeof k} & ${typeof rightCut}`);
    i = rightCut + k;
    console.log(`LINE36 i, leftCut, rightCut ${i}, ${leftCut}, ${rightCut}`);
  } 
  // Now push on the few, leftover chars.
  leftCut = rightCut; 
  rightCut = s.length;
  lines.push(s.slice(leftCut, rightCut)  );
  return lines;
}


 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               

function fiveMain(){
  let slider5El = document.getElementById('slider5');
  let reqCharsPerLine = Number(slider5.value);
  let out5El = document.getElementById('output5');

  let slider5digitsEl = document.getElementById('slider5digits');
  slider5digitsEl.innerHTML = slider5.value;

  let arr = muncher(reqCharsPerLine, longString);
  madeParagraph = arr.join('\n');
  out5El.innerHTML =  madeParagraph;
}

/*
  _____   ___   ___   _____   ___ 
 |_   _| | __| / __| |_   _| / __|
   | |   | _|  \__ \   | |   \__ \
   |_|   |___| |___/   |_|   |___/
                                  
*/

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
        console.log ( putParagraph(["Only an alert and", "knowledgeable citizenry ", "can compel the proper meshing ", "of the huge industrial ", "and military ", "machinery of defense ", "with our peaceful ", "methods and goals"]));
        break;
      case 'breakmake': 
        let customWidth = Number(process.argv[3]);
        let test1 = putParagraph(muncher(customWidth, ike));
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
<form oninput="console.log("section5");">
<h3>Break the lines at a requested length:</h3>
  <div class="form-row align-items-center">
    <label for="formControlRange">Requested line length: <span id="slider5digits" style="width: 7rem"> (?) </span> characters.</label>
    <input type="range" class="form-control-range  cinch" id="slider5"  onchange="fiveMain()" value="27" min="8" max="99"    >

  </div>
  <pre class="outpanel-wide" id="output5">nothing here yet</pre>
<form>
`


// 5th tab
let code5El = document.getElementById('code5');
code5El.innerHTML = `
<div>
<p>Created at the DEV-Together Meetup with Davi, at Bendyworks.</p>
  <p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/five.js"> solution</a> in javascript</p>
</div>
`;