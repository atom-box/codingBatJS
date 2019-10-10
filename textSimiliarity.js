/*
	Refactor so an array of orphans is returned.
	That array goes into a scorer that returns a fraction of 1.
	This gets repeated for the backwards.
	Divide these by two and return the inverse.

	Make the array builder to strip punctuation and casing and remove undefined.
	Make a web page.
	Make an API.
*/



/*
To run this, if you have Node, type NODE TEXTSIMILARITY FILENAME1 FILENAME2
*/

/*
Evan Genest 608-228-9493 genest.1 AT osu DOT edu
What's going on here:
"Write a program that takes as inputs two file paths and uses a metric to determine how similar they are" The result is an integer, a score from 0 (no words in common) to 1 (identical) 
*/

// TODO Remember to implement a 100% same string to string as a first check
// TODO Implement weighted scoring.  Serve as HTML would be best for my time constraints.
// TODO Have mercy: take 5 minutes each to roll back, show output, 
// Paste in the initial napkin sketch
// TODO add a flag so it can run in comments mode.  Just requires lots of ifs.  Or fork it and submit as two files.
// Given two arrays of words, return total an object that has the number of orphans from each side.

// (string s) -> {string with no non-alpha chars}
function alphaSanitize(s) {
	let dirtyChars = s.split('');
	const reggie = /[A-z]/
	let onlyAlphas = dirtyChars.filter( c => reggie.test(c) );
	return onlyAlphas.join('');
}


// (string s)->{ several arrays of words, returns a final clean array of words }
function toWords(s) {
	const words = {};

	// 1a. split the string to words on ' ' as a delimiter
	words.dirty = s.split(' '); // returns array of raw words

	// 1b. returns array with spaces removed from word boundaries
  words.trimmed = words.dirty.map((w)=>{return w.trim()} ); 
  console.log('Trimmed array is here: ' + words.trimmed);

	// 2. create words.collapsed, an array that lacks any UNDEFINED array memebers
  words.collapsed = words.trimmed.reduce( 
    (x,y)=> {
      if (y.length > 0){
        x.push(y); 
      }
      return x;
    }
    , []);

	// 3. everyone lowercased
  words.lowered = words.collapsed.map( (x)=>{return x.toLowerCase()} )  ;
  console.log('collapsed array is here: ' + words.collapsed);
	// 4. strip beginning and endings that are non-alpha but ignore interior no-alpha.
	words.justAlpha = words.lowered.map( item => alphaSanitize(item)  );
  // TODO  TODO  TODO  TODO   toWords the ends
  return words.justAlpha;
 }

function weighted(s){
	if (s.length < 3){
		return 0.6
	} else if (s.length < 5) {
		return 0.8 
	} else {
		return 1
	}
}

function oneDirectionOrphanCheck( array1, array2 ){
	console.log(array1);
	console.log(array2);
	let maxTheoreticalOrphans = 2 * (array1.length + array2.length);
	let i = array1.length - 1, j = array2.length - 1;
	while(i >= 0){
		while(j >= 0){
				/* TEST TEST TEST console.log(`left ${i} checked right ${j}: [${array1[i]}] and [${array2
					[j]}]`);*/
				if (array1[i] === array2
					[j] ){
					/* TEST TEST TEST console.log('woof:' + array1[i] + array2[j]);  */

					// if match, must remove j's down to that point and, IMPORTANT, if counting up we would need to reset the j but remember, loop is counting high to low, so actually need not do anything about the j :)
					array2.splice(j);
				}
			j -= 1;
		}
		j = array2.length - 1;
		i -= 1; 
	} 
	console.log(`Orphans from list A: ${array1.length}`);
	console.log(`Orphans from list B: ${array2.length}`);
	console.log(array1);
	console.log(array2);
	// Return total2WayOrphans / maxTheoreticalOrphans
	// ...lower score is better, range is zero (no matches) to one (texts are identical)
	return (array1.length + array2.length) / maxTheoreticalOrphans;
}


// Meaningless timestamp.
console.log((new Date()).toLocaleTimeString());


let unlikeness1 = 0, unlikeness2 =0;
let wordsA =  toWords( 'clop any coupons or scan individual barcodes');
let wordsB = toWords('coot out any coupons or scan individual UPCs');
unlikeness1 = ( oneDirectionOrphanCheck(wordsA, wordsB));
wordsA =  toWords( 'clop any coupons or scan individual barcodes');
wordsB = toWords('coot out any coupons or scan individual UPCs');
unlikeness2 = ( oneDirectionOrphanCheck(wordsB, wordsA));

console.log(`Goodness of match after a two-way check: [${ 1 - (unlikeness1 + unlikeness2) / 2 }].`);










/*
This challenge will focus on the similarity between two texts.  Your objective is to write a program that takes as inputs two file paths and uses a metric to determine how similar they are.  Documents that are exactly the same should get a score of 1, and documents that don’t have any words in common should get a score of 0.

You will have to make a number of decisions as you develop this solution:
Do you count punctuation or only words?
Which words should matter in the similarity comparison?
Do you care about the ordering of words?
What metric do you use to assign a numerical value to the similarity?
What type of data structures should be used?  (Hint: Dictionaries and lists are particularly helpful data structures that can be leveraged to calculate the similarity of two pieces of text.)

Requirements:
The document similarity algorithm does not need to perform well, and you don’t need to account for all edge cases.  Focus on having some fun with it and producing code that we can discuss together.
Use the 3 sample texts provided below to develop your app.  Samples 1 and 2 should be more similar than samples 1 and 3.
You may choose any language you like, but only standard libraries may be used (i.e., no sci-kit learn, nltk, spacy, etc. – that’s cheating!).
The code, at a minimum, must run.  Please provide clear instructions on how to run it.
When complete, please upload your codebase to a public Git repo (GitHub, Bitbucket, etc.) and email us the link.  Please double-check this is publicly accessible.

Samples:
Sample 1
The easiest way to earn points with Fetch Rewards is to just shop for the products you already love. If you have any participating brands on your receipt, you'll get points based on the cost of the products. You don't need to clip any coupons or scan individual barcodes. Just scan each grocery receipt after you shop and we'll find the savings for you.
Sample 2
The easiest way to earn points with Fetch Rewards is to just shop for the items you already buy. If you have any eligible brands on your receipt, you will get points based on the total cost of the products. You do not need to cut out any coupons or scan individual UPCs. Just scan your receipt after you check out and we will find the savings for you.
Sample 3
We are always looking for opportunities for you to earn more points, which is why we also give you a selection of Special Offers. These Special Offers are opportunities to earn bonus points on top of the regular points you earn every time you purchase a participating brand. No need to pre-select these offers, we'll give you the points whether or not you knew about the offer. We just think it is easier that way.

Bonus Points:
Package this application as a web service that performs the comparison in response to a POST request containing the two texts in the body of the payload.  You may use external libraries (i.e., flask).
Let’s take it a step further and package the web service in a Docker container that can be built and run locally or pulled down and run via Docker Hub.




*/