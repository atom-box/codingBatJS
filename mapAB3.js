// https://codingbat.com/prob/p115012
// Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

function mapAB3(o){
	return Object.keys(o);
}




console.log(mapAB3({"a": "aaa", "c": "cake"})); // {"a": "aaa", "b": "aaa", "c": "cake"}
console.log(mapAB3({"b": "bbb", "c": "cake"})); // {"a": "bbb", "b": "bbb", "c": "cake"}
console.log(mapAB3({"a": "aaa", "b": "bbb", "c": "cake"})); // {"a": "aaa", "b": "bbb", "c": "cake"}