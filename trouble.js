/*
notes:


The nested I-J loops are deceptively simple.
Only need to have a single IF, no IF ELSE.
Because for the else, J will automatically be left behind.
Just have a IF-Match:
	1 push maatch onto founds array
	2 push prior Js to orphans array
	3 gotta break the J to get out to the next I loop iteration
*/

// Meaningless timestamp.
console.log((new Date()).toLocaleTimeString());

// remember: unlikeness is 1 for worst similarity, 0 for best similarity
let unlikeness1 = 0, unlikeness2 =0;
let wordsA =  toWords( "Have a 2good day today.");
let wordsB = toWords("Hey, have a  day.");
unlikeness1 = ( onewayOrphanCheck(wordsA, wordsB));