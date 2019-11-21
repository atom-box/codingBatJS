// A longer version of this, with 8 dev tests, for development in the Node CLI, is saved at CodingBat/padder.js

/* For a list of given strings pad out two parts.   
1.  Any trailing digits get padded with leading zeroes to make the number six digits.
2.  The leading two digit year gets padded out to a four digit year.
*/

"use strict;"
import tags from "padderDB.js"

/*
** When passed NOARGUMENT, 
** this function returns the first three tags in the db
*/
const showThirtyRaw = function() {
	return tags.slice(0,30);
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
** When passed a number of six or less digits,  
** returns a six digit number, with 
** zeroes as leading padding
** e.g. passing '4' returns '000004'
** e.g. passing '99' returns '000099'
*/
const idExpand = function(s) {
	let shortID = String(s);	
	while(shortID.length < 6){
		shortID = '0' + shortID;
	}
	return shortID;
}



/*
** When passed a single raw tag STRING, 
** returns a tag STRING where all the years have been expanded to 4 digit years and
** all of the trailing ids have been padded to be six digits long
** e.g. passing '4foo7' returns '2004foo000007'
** e.g. passing '90foo2345' returns '1990foo002345'
*/
const cleanseOneTagCompletely = function(t) {
	let reggie, // REGEX 
	frags = [], // parsed pieces of the tag
	a, // year
	b, // alpha
	c; // id
	reggie = /(^[0-9]+)([A-z].*[A-z])([0-9]+)$/;
	frags = t.match(reggie); // array[0] is fulltag; array[1] is leading year digit; array[2]is captured alphas; array[3] is captured ID number
	a = yearExpand(frags[1]);
	b = frags[2];
	c = idExpand(frags[3]);
	return a + b + c; // returns one completely fixed tag as a String
}

const cleanseOneArrayCompletely = function(rawArr) {
	let cleanArr = [];
	let i = 0,
	stop = rawArr.length;
	for (; i < stop; i += 1){
		cleanArr.push( cleanseOneTagCompletely(rawArr[i]) )
	}
	return cleanArr;
} 


 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               

		console.log(`We see_______${cleanseOneTagCompletely(tags[0])}`);
		console.log(`We see_______${cleanseOneArrayCompletely(tags)}`);

