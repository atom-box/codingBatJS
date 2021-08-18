/*
 Parens checker.
 Accepts one string, multilined, as input, returning T for mismatched parens or F
	January 23, 2018
*/

let unbalanced = (instring)=>{
	let counter = 0;

	for (let c of instring){
		console.log(`Looking now at ${c}.`);
		if (c ==='('){ counter += 1;}
		if (c ===')'){ counter -= 1;}
		console.log(`afterwards counter is ${counter}.`);
	}
	
	return (counter===0) ? false : true;
}

let x = ` (((((`;



if (unbalanced(x)){
	console.log(`The parens are not balanced.`);
} else {
	console.log('The parens are balanced');
}

let flippit =(word)=> {
	let letters = [];
	// set for final pos'n
	let position = word.length -1;
	for (c in word){
		letters[position] = word[c];
		position -=1;
	}
	return letters.join("");
}

console.log(flippit("horsefeathers"));