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

let now = new Date();

console.log("Length of now.constructor " + now.constructor.length);
for (p in now.constructor) {
	console.log("P is " + p + " and is " + now.constructor[p]);
}

console.log("Length of drawl.constructor " + drawl.constructor.length);
for (p in drawl.constructor) {
	console.log("P is " + p + " and is " + drawl.constructor[p]);
}


// Just show OWN PROPERTIES of the funciton
console.log(drawl(process.argv[0]));
drawl.foo = "guitar";
drawl.bar = [4, 5, 77, 345, 63, 4, 55]
const myKeys = Object.keys(drawl);
console.log("Length of object keys in myKeys " + myKeys.length);
myKeys.forEach( (item) => {console.log(item)})

// Show all properties, including inherited from prototype
for (p in drawl){
	console.log("Here:" + p + " is " + drawl[p]);
}

var myArray = [];
var myMystery;

console.log("myArray==========");
for (property in myArray) {
	console.log("Name: " + property + " Value: " + myArray[property]);
}

// console.log("mystery==============");
// for (property in mystery) {
// 	console.log("Name: " + property + " Value: " + myArray[property]);
// }
// ERROR!

console.log("drawl================");
for (property in drawl) {
	console.log("Name: " + property + " Value: " + drawl[property]);
}


// (myKeys === undefined)? console.log("yuck") : myKeys.forEach(console.log(myKeys));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function