/* Replace vowels in a string.  Use a consistant vowel substitution is randomly generated at the start of the run. */

const ww = {};

// keys are the original letters, values match each original letter to a novel random new vowel 
ww.changedVowel = {};
ww.test1 = "Go tell it on the mountain, over the water and through the sea.";


/*
** Accepts an array 
** Returns an object; keys are the original array vals, values are randomly chosen elements from the original array
*/
let invent = function(arr1) {
	// make 2 destroyable copies of the passed-in array
	let arr2 = arr1.map( (item)=> {return item} ),
	arr3 = arr1.map( (item)=> {return item} );

	let translator = {},
	randomGrabPosition = 0,
	originalItem = null;

	
	while (arr2.length > 0){
		randomGrabPosition =  Math.floor( arr2.length * Math.random() );
		originalItem = arr3.shift();
		translator[originalItem] = arr2.splice(randomGrabPosition, 1);
	}
	return translator;
}


let a = invent(['a', 'e', 'i', 'o', 'u']);
console.log(a);

