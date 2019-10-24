/*
Find the longest stretch of chars without a repeat.
First seen at National Decision Support on 10-24-2019.
*/
const streak = {}; // namespace 
streak.string = 'TallahasseeChatanooga;'  // the string which will get judged
// below, spannity, is length of best uniqs streak, excluding the capping twin repeat char positions e.g. 'roarrrrrrrr' spannity would be 2, aabbcc spannity would be 0 
streak.spannity =  0; // int for local max, after J
streak.bestSpan = 0; // int for final max, after I
streak.founds = []; // flushed whenever leaving inner loop
streak.first = 0; // first index of char that got repeated
streak.last = 0; // last index of char that got repeated
streak.finalJ = 0;

for (let i = 0, stop = streak.string.length; i < stop; i++){
		for (let j = i; j < stop; j++ ){
			console.log(`Now: here[${streak.string[j]}]  vs  starting[${streak.string[i]}]`);
			streak.finalJ = j;
		} // end J
	// archive the founds and then flush them
	streak.first = i;
	streak.last = streak.finalJ;
	streak.spannity = streak.finalJ - i;
	if (streak.spannity > streak.bestSpan){
		streak.bestSpan = streak.spannity;
	}
	streak.founds = [];
console.log(`Current longest ${streak.spannity}!`);
console.log(`${streak.string.slice(streak.first, streak.last)}!`);
console.log(`${streak.spannity}!`);
} // end I


console.log(`${streak.spannity}!`);







