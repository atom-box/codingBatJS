let bulbs = [];

/* Integer SIZE.  How many things will be in the array.
// Thing TYPE is string, boolean, null, whatever.  It's what you want stuck into each member.
// Function POPULATEBULBS(size, type) .  Returns an array. */
let populateBulbs =(size, type)=>{
	let things = [];
	for( ; size > 0; size--){
		// offset b/c zero indexed
		things[size -1] = type;
	}
	return things;
}

// bulbsList Array of booleans. A list of the incoming bulbs 
// startedFrom Integer. The square the person started from, also the interval they advance by when they walk to next bulb
// gauntletWalk(bulbsList, startedFrom) Function.  Returns the NEW array of 100 falses/trues representing the bulbs after they've been walked.
const gauntletWalk =(bulbsList, startedFrom)=>{
	for(let i = startedFrom; i < bulbsList.length; i += startedFrom){
		bulbsList[i] = !bulbsList[i];
	}
	return bulbsList;
}

// Array BULBSLIST. Array of booleans. A list of the incoming bulbs, whether lit or not. 
// Function TELLNUMBERLIT(BULBSLIST).  Returns number of TRUE 
const tellNumberLit =(themBulbs)=>{
	let onTotal =0;
	for (let member of themBulbs){
		if (member===true){
			onTotal++;
		}
	}
	return onTotal;
};


let showBulbs =(themBulbs)=>{
	console.log(`Array is ${foo.length} long and looks like this:`)
	console.log(foo);
}


// Integer WHICH choose a bulb
// Array THEMBULBS the current bulb states
// Function PEEK(THEMBULBS).  Returns boolean.
let peek =(themBulbs, which)=> {
	return themBulbs[which];
}



// Integer GOAL.  How many bulbs you want on.
// Function REPEATSTILLSUCCESS(array, goal). Returns integer for number of gauntlet walks.
const repeatsUntilSuccess =(themBulbs, goal)=> {
	//test if already true
	console.log(`Started at ${new Date}`);
	// Integer INVENTORY.  Number of bulbs now on.
	let numberOfWalks = 0;
	let inventory = tellNumberLit(themBulbs);
	while (inventory !== goal){
		themBulbs = gauntletWalk(themBulbs, ++numberOfWalks);
		inventory = tellNumberLit(themBulbs);
	}
	console.log(`Done at ${new Date}`);
	return numberOfWalks;
}



let foo = populateBulbs(100, false);
foo = gauntletWalk(foo, 3);
showBulbs(foo);
console.log(`We found this many on ${tellNumberLit(foo)}`);
/*--------------------------------*/

const WEWANT = 51;
let cumulativeWalks = 0;
cumulativeWalks = repeatsUntilSuccess(foo, WEWANT);
console.log(`To get ${WEWANT} it took ${cumulativeWalks}...`);




/**
SWITCHING LIGHTBULBS PROBLEM
There are 100 light bulbs, labeled from 1 to 100, lined up all set to off initially. There are also 100 people each numbered 1 to 100 as well. Person 1 will go through all the light bulbs and flip the switch turning all of them on. Then person number 2 will go through all the light bulbs and flip the switch on each 2nd element turning them off, namely: light bulbs #2, #4, #6, #8, etc. Then person 3 will go and do the same for the 3rd ligh bulb, 6th, 9th, etc. Then questions are usually asked about the light bulbs, for example:
• How many light bulbs will be on after 100 people have gone through them?
• What is the status of the Nth light bulb (34th, 62nd, etc.)? Is it on or off?
• How many people need to go through the line of light bulbs until exactly K light bulbs are set
to on?



// maxFolks Integer.  Final walker that will walk. Starts with the 'two walker' and increments succesive walkers by 1.
	bulbsList Array of booleans.  A list of the bulbs, whether lit or not.
	startWalking(bulbsList, folks) Function.
*/
