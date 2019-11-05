// gotta run as node -r esm filename.js to get import to work

/* For a list of given strings pad out two parts.   
1.  Any trailing digits get padded with leading zeroes to make the number six digits.
2.  The leading two digit year gets padded out to a four digit year.
*/

"use strict;"
import tags from "/Users/evan/Dropbox/code/codingBatJS/helpers/padderDB.js"

/*
** When passed a tag, 
** this function returns the same tag
** with either 19 or 20 prefixed onto the year
*/
const fixYear = function(tag) {
	return tag.slice(0,2);
}

/*
** When passed NOARGUMENT, 
** this function returns the first three tags in the db
*/
const showThree = function() {
	return tags.slice(0,3);
}


/*
** When passed a one or two digit number, 
** returns that as a four digit year
** e.g. passing '4' returns 2004
** e.g. passing '99' returns 1999
*/
const yearExpand = function(s) {
	const CURRENTYEAR = 19;
	let shortYear = Number(s);	

	if (shortYear > -1 && shortYear < 99 ){ // legit input
		if (shortYear < 10){
			return '200' + String(shortYear);
		}
		if (shortYear <= CURRENTYEAR){
			return '20' + String(shortYear);
		}
		if (shortYear <= 99){
			return '19' + String(shortYear);
		} else { // should never see this
			return '9998'; // returns nonlethal error
		}
	}	else { // bad input: not number, not in range
		return '9999' // returns nonlethal error
	}
}

/*
** When passed one entire tag, 
** returns just the fixed year as a string
** e.g. passing '4foo83827' returns 2004
*/
const cleanseYearTag = function(t) {
	let reggie = /(^[0-9]+)(.*)/;
	let frags = t.match(reggie); // array[0] is fulltag; array[1] is leading year digit; array[2]is captured post-year portion
	return yearExpand(frags[1]); // todo THIS IS RETURNING RAW YEAR and leftovers
}




 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
// Detect option. Run Tests.
let option = process.argv[2];
if (option !== undefined){
	switch (option){
		case 'nada':
			console.log(`Running the :::${option}::: test.`);
			break;
		case 'dbsize':
			console.log(`Present ${tags.length}`)
			break;
		case 'seeyear':
			console.log(`Tag starts with these two :::${fixYear(tags[0])}:::`)
			break;
		case 'showthreetags':
			console.log(`We see_______${showThree()}`);
			break;
		case 'cleanyear':
			console.log(`We see_______${cleanseYearTag(tags[0])}`);
			break;





		default: 
			console.log(`:::${option}::: not recognized.`)
	}
} else {
	console.log(`To run tests, enter an option besides ${option}`)
} 