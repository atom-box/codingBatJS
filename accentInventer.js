/* Replace vowels in a string.  Use a consistant vowel substitution is randomly generated at the start of the run. */

const ww = {};

// keys are the original letters, values match each original letter to a novel random new vowel 
ww.changedVowel = {};
ww.test1 = "Go tell it on the mountain, over the water and through the sea.";


/*
** Accepts an array 
** Returns an object; keys are the original array vals, values are randomly chosen elements from the original array
*/
let createShifties = function(arr1) {
	// make 2 destroyable copies of the passed-in array
	let arr2 = arr1.map( (item)=> {return item} ),
    // This third array is needed because the second array will get popped down to emptiness
	arr3 = arr1.map( (item)=> {return item} );
	let translator = {},
	randomGrabPosition = 0,
	originalItem = null;

	
	while (arr2.length > 0){
		randomGrabPosition =  Math.floor( arr2.length * Math.random() );
		originalItem = arr3.shift();
		translator[originalItem] = arr2.splice(randomGrabPosition, 1)[0];
	}
	return translator;
}

// FunctionSignature
// Given shifting instructions (object) and original text (string)
// Returns altered string
const accentify = function(shiftInstructions, originalText){
// MAKE ARRAY OF THE KEYS
// LOOP IT AS WHILE(KEYSEXIST)
//      DO TRANSLATION FOR ONE OF THE VOWELS
//      POP THE ARRAY
    originalVowels = Object.keys(shiftInstructions);
    while(0 < originalVowels.length){
        originalVowel = originalVowels.pop();
        console.log(originalVowels.length);
        accentedText = originalText.replace(originalVowel, shiftInstructions[originalVowel]);
    }
    return accentedText;
}






let newVowelScheme = createShifties(['a', 'e', 'i', 'o', 'u']);
console.log(newVowelScheme);
accent1 = newVowelScheme;
// ww.testA = ww.test1.replace('a','.');
console.log(accentify(accent1, ww.test1));
