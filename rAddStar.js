// Given a list of strings, return a list where each string has "*" added at its end.


function addStar(cintas) {
	var pprint = (s)=>{
		console.log(s);
	}
	cintas.map(pprint);
}



addStar(["a", "bb", "ccc"]) // ["a*", "bb*", "ccc*"]
addStar(["hello", "there"]) // ["hello*", "there*"]
addStar(["*"]) // ["**"]

