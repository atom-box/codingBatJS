/* 
brix  Object.  Contains property # of stockpiled , contains a setter method, contains a buildthewall-type method.
_stockpile Object.  A private property.  Each category of brick is named by inches a digitstring
*/ 
let brix = {};
brix = {
	_stockpile: {
		5: 0,
		1: 0
	}
};

// g & s Integers.  
// Sets the stockpile of Grand & Small bricks
brix.set =(g, s)=>{
	if (!Number.isInteger(g) || !Number.isInteger(s)){
		console.log(`****Set event failed****`);
		return;
	}
	if (g > 0){
		brix._stockpile[5] = g;
	}
	if (s > 0){
		brix._stockpile[1] = s;
	}
}

/**
 currentGap Integer.  The inches of wall you are trying to fill in.
 whichBrick Integer.  The inches a single brick is.
*/
brix.postBuildGap =(currentGap, whichBrick)=> {
	// Must be string to dereference array
	let whichBrickStr = String(whichBrick);
	console.log(`If your opening is ${currentGap} and your brick size is ${whichBrick}`);
	console.log(`and your inventory of size ${whichBrick} bricks is ${brix._stockpile[whichBrickStr]}...`)

	// Is gap already solved? Report as zero.
	if (currentGap === 0) return currentGap;

	// Make a decimal rough answr, then INT it.
	let suggestedLay = currentGap / whichBrick;
	suggestedLay
	 = Math.trunc(suggestedLay
	 	);


	let actualLay = 0;
	if (brix._stockpile[whichBrickStr] > suggestedLay) {
		actualLay = suggestedLay;
	} else {
		actualLay = brix._stockpile[whichBrickStr];
	}
	brix._stockpile[whichBrickStr] -= actualLay;
	// Get the leftover space to return for next whittling down of the gap (until 0 returned).
	const leftOverSpace = currentGap - actualLay
	 * whichBrick;

	console.log(`Laid ${actualLay} (size ${whichBrick}) bricks.  And left a space of ${leftOverSpace}.`);
		return leftOverSpace
}


brix.set(1, 1);  
let remainingSpace = brix.postBuildGap(10, 5);
remainingSpace = brix.postBuildGap(remainingSpace, 1);
console.log(`Function exited, returned this: ${remainingSpace} as the amount of unbuilt space.`);
console.log(`Inventory of remaining 5 and 1 bricks is ${brix._stockpile["5"]} and ${brix._stockpile[1]}\n\n`)

brix.set(100, 25);
remainingSpace = brix.postBuildGap(164, 5);
remainingSpace = brix.postBuildGap(remainingSpace, 1);
console.log(`Function exited, returned this: ${remainingSpace} as the amount of unbuilt space.`);
console.log(`Inventory of remaining 5 and 1 bricks is ${brix._stockpile["5"]} and ${brix._stockpile[1]}\n\n`)

// brix.set(100, 25); // NO INVENTORY.  SHOULD BUILD NOUGHT AND RETURN FULL WALL AS GAP
remainingSpace = brix.postBuildGap(164, 5);
remainingSpace = brix.postBuildGap(remainingSpace, 1);
console.log(`Function exited, returned this: ${remainingSpace} as the amount of unbuilt space.`);
console.log(`Inventory of remaining 5 and 1 bricks is ${brix._stockpile["5"]} and ${brix._stockpile[1]}\n\n`)

/*
Jan 1, 2019
@mistergenest

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true

DevDiary: I learned that arrow functions are different than functions.  They are strictish, they lack the arguments list, so you cannot check their length.
DevDiary: This was supposedly a 20 min codingbat online...but I couldn't resist making it 'real' with input checking, an inventory to manipulate adding just a few features was 80% of the time.  The original core was nothing -- feature-creep occurred like crazy, like in a real project.
*/
/*
Better design:
Fundamental limit to this strategy is that I think it 
fails in many edge cases, including if the smaller brick is not 1.  
A better algorithm would be something more math-y maybe?
Inputs are not vetted for negatives, strings...
*/

