/* Replace vowels in a string.  Use a consistant vowel substitution is randomly generated at the start of the run. */

const ww = {};

// keys are the original letters, values match each original letter to a novel random new vowel 
ww.changedVowel = {};
ww.test1 = "Go tell it on the mountain, over the water and through the sea.";


/*
** Accepts an array 
** Returns an object; keys are the original array vals, values are randomly chosen elements from the original array
*/
let altVowelScheme = function(arr1) {
	// make 2 destroyable copies of the passed-in array
	let arr2 = arr1.map( (item)=> {return item} ),
	arr3 = arr1.map( (item)=> {return item} );
    //####
    //####
    //####
    arr2.push('z');
    arr3.push('y');
    console.log("length of array 1 is " + arr1.length);
    console.log("length of array 2 is " + arr2.length);
    console.log("length of array 3 is " + arr3.length);
    return;

    //////
    //////
    //////
	let translator = {},
	randomGrabPosition = 0,
	originalItem = null;

	
	while (arr2.length > 0){
		randomGrabPosition =  Math.floor( arr2.length * Math.random() );
		originalItem = arr3.shift();
		translator[originalItem] = arr2.splice(randomGrabPosition, 1)[0];
	}
    // refactor to make an array-show function that can show any of the three arrays
    const getter = (function(whichArray){
        // todo For now,hardcode in a single array, ignore the parameter passed
        return function(){return arr2};
    })()

	return getter;
}


let a = altVowelScheme(['a', 'e', 'i', 'o', 'u']);
// console.log(a());
// console.log("type of a is " + typeof a);

