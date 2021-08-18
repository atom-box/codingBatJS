console.log(`Script 3 succesfully loaded at ${new Date()}.`)


/*_                   _        
 | |                 (_)       
 | |   ___     __ _   _    ___ 
 | |  / _ \   / _` | | |  / __|
 | | | (_) | | (_| | | | | (__ 
 |_|  \___/   \__, | |_|  \___|
               __/ |           
              |___/            
*/

// Function to find first result where string of non repeaters is longest.
// Accepts a string
// Returns longest span as a string (first  only)
function uniq(s){

	// reject or clean up funky input
	let reggie1 = /[^A-z]/g; 
	if ( s.match(reggie1) ) {
		return "No spaces, no punctuation."
	}
	s = s.toLowerCase();

	const streak = {}; // namespace 
	streak.bigString = s; // the string which will get judged
	// below, spannity, is length of best uniqs streak, excluding the capping twin repeat char positions e.g. 'roarrrrrrrr' spannity would be 2, aabbcc spannity would be 0 
	streak.smallString ='';
	streak.spannity =  0; // int for local max, after J
	streak.bestSpan = 0; // int for final max, after I
	streak.founds = []; // flushed whenever leaving inner loop
	streak.first = 0; // first index of char that got repeated
	streak.last = 0; // last index of char that got repeated
	streak.finalJ = 0;
	streak.wordy = '';
	let i, 
	stop;

	let app = {testing: false};


	for (i = 0, stop = streak.bigString.length; i < stop; i++){
			for (let j = i; j < stop; j++ ){
				if (app.testing) { // test mode true
					console.log(`Now: here[${streak.bigString[j]}]  vs  starting[${streak.bigString[i]}]`);
				}
				// DOES FOUNDS-ARRAY CONTAIN THE CURRENT CHAR?
				if (streak.founds.some((x)=> x === streak.bigString[j]   ) ) {
						// TODO pseudo alert, in test mode only:
					if (app.testing) { // test mode true
						console.log(`Say HEY!  ${streak.bigString[j]} is  ${streak.bigString[j]}  `);
					}
						break;
				}
				// Put the current char into the FOUNDS array
				streak.founds.push(streak.bigString[j]);
				streak.finalJ = j;
			} // end J
		// archive the founds and then flush them
		streak.first = i;
		streak.last = streak.finalJ;
		streak.spannity = streak.finalJ - i + 1;
		if (streak.spannity > streak.bestSpan){
			streak.bestSpan = streak.spannity;
			streak.smallString = streak.bigString.slice(streak.first, streak.last + 1);
		}
		streak.founds = [];
		if (app.testing) { // test mode true
				console.log(`Current longest ${streak.spannity}!`);
				console.log(`${streak.bigString.slice(streak.first, streak.last + 1)}?`);
				console.log(`${streak.spannity}!`);
		}
	} // end I

	// Avoid collapsing the output spacing
	if (streak.smallString === '') {
		streak.smallString = '...'
	}

	return streak.smallString;
}


// return WARNING if non-alpha chars, including spaces 
function charFixer(s) {
	let reggie1 = /[^A-z]/g; 
	if ( s.match(reggie1) ) {
		return "Please type a single word, with no punctuation characters."
	}
	s = s.toLowerCase();
	return s;
}



// unused; just for testing during development
function grub(s) {
	return s + '_' + s;
}





/*
 _____     ____    __  __ 
 |  __ \   / __ \  |  \/  |
 | |  | | | |  | | | \  / |
 | |  | | | |  | | | |\/| |
 | |__| | | |__| | | |  | |
 |_____/   \____/  |_|  |_|
                           
*/





let sol3 = document.getElementById('solution3');
sol3.innerHTML = `
<form  oninput="out1.value = uniq(str1.value)">
	<p>Try entering words such as <i>broomball</i>, <i>Menominee</i>, or <i>spoonerism</i>.</p>
  <label for="usr">If the text is:</label>
    <input type="text" class="form-control" placeholder="type here" name="str1">
  <p ><br/>Then the longest unique streak of characters is:</p>
  <div class="core stripe"><output class="inverse" name="out1" for="str1">
  ...
  </output></div>
</form>
`;




// 3rd tab
let code3El = document.getElementById('code3');
code3El.innerHTML = `
<div>
<p>Tested in Node.</p>
	<p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/three.js"> solution</a> in javascript</p>
</div>
`;