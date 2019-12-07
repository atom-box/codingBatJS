/*
Out of curiousity, 
Prove to myself:
functions are objects
*/

// Run it in node and browser, to compare

// In its 'global' we are in Node, so args 0 EMPTY OBJECT 1, 2 BOTH COMPLEX ENVIRO-OBJECTS 3, 4 are paths to file and its parent directory

// Inside the drawl function, only argument is argument[0], the passed in datum. 

function drawl(s){
// Show the args
// 	console.log("==================above drawl loop");
// 	for(let i = 0; i < 11; i++){
// 		console.log("ooo   ooo   ooo   ooo   " + arguments[i]);
// }
	if (typeof s === 'string'){
		return 's t r i n g'
	} else {
		return 'nose wax'
	}
}

console.log(drawl(process.argv[0]));
console.log(drawl(process.argv[1]));
console.log(drawl('foxy'));
console.log(drawl(33));
console.log(drawl(""));
console.log(drawl(null));



for (p in drawl) {
	console.log("P is " + p + " and is " + drawl[p]);
}
