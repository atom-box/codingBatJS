// https://codingbat.com/prob/p115012
// Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.



function mapAB3(o){
	let tt = {};
	// Flag flips once to true when one case found, back to false if second case is found
	// Initialize the toggle to false.
	tt.toggle = false;
	for (k in o) {
		if (k ==='a' && o[k] === 'aaa' ||
		k ==='b' && o[k] === 'bbb'){
			tt.toggle = !tt.toggle;
		} 
	}
	return `Toggle says ${tt.toggle}`;
}

// IT'S AN OBJECT. WE'RE GOING TO NOT USE MAP, SINCE THAT IS A METHOD FOR ARRAYS.  
// CYCLE THROUGH THE OBJECT WITH FOR x IN y.


console.log(mapAB3({"a": "aaa", "c": "cake"})); // {"a": "aaa", "b": "aaa", "c": "cake"}
console.log(mapAB3({"b": "bbb", "c": "cake"})); // {"a": "bbb", "b": "bbb", "c": "cake"}
console.log(mapAB3({"a": "aaa", "b": "bbb", "c": "cake"})); // {"a": "aaa", "b": "bbb", "c": "cake"}