/*
** Recursive sorter.  
** Strategy: (1) was a 



for i

for j starting with j = i + 1
	if bean[j] < bean[0]
		c = bean[j]
		bean[j] = bean[i]
		bean[i] = c




*/

function makeArray(reps) {
	let stringNum = "";
	while(reps--){
		stringNum += (Math.random() * 100000000000000000).toString();
	}
	return stringNum;
	// todo: convert to int
}

console.log( makeArray(22) );

