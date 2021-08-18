/*
Find the longest stretch of chars without a repeat.
First seen at National Decision Support on 10-24-2019.
*/

	const app = {};
	app.args = process.argv;
	// To run in testing mode, invoke as node appyWord.js t
	app.testing = false; // toggle print statements while running
	// just runs three words at bottom of code
	app.useBuiltIns = app.args.length < 4 ? true : false;
	// if useBuiltIns is false, allows one or more words entered at the command line

if (app.args[2] === 't') {
	app.testing = true;
	console.log('Running in TEST mode.')
} else if (app.args.length < 3) {
	console.log('Running in SILENT mode.')
} else if (app.args.length > 3) {

} else {
	console.log('Extra arguments ignored.')
}



// Function to find first result where string of non repeaters is longest.
// Accepts a string
// Returns longest span as a string (first  only)
function uniq(s){
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
	return streak.smallString;
}

if (app.useBuiltIns) {
	console.log(`=====We like ${uniq('baseball')}?================================`);
	console.log(`=====We like ${uniq('ootybobbyy')}?================================`);
	console.log(`=====We like ${uniq('hoorrahrrr')}?================================`);
} else if (!app.useBuiltIns){
	console.log(`app.args length is ${app.args.length}`)
	while (app.args.length > 3) {
		let w = app.args.pop();
		console.log( `[Word] ${w} [Streak] ${uniq(w)}`);
	}
} else {
	console.log(`Should never see this.`);

}








