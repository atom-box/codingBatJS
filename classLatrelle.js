/*
Create a linked list.
*/

/*
This is an experimental feature branch for running in the NODE REPL. 
It has testing flags down at the switch statement.
 Once it works it can be merged with the browser-based version of this program.
*/

/*
  _           _   _         
 (_)         (_) | |        
  _   _ __    _  | |_   ___ 
 | | | '_ \  | | | __| / __|
 | | | | | | | | | |_  \__ \
 |_| |_| |_| |_|  \__| |___/
*/

// Lowest node must be findable, so 
// make its ID 000001

let config = {};
config.nodes = {};
config.currentID = 1,
config.soonID = null,
config.usedIDs = []; // stores to ensure unique new IDs



/*_                   _        
 | |                 (_)       
 | |   ___     __ _   _    ___ 
 | |  / _ \   / _` | | |  / __|
 | | | (_) | | (_| | | | | (__ 
 |_|  \___/   \__, | |_|  \___|
               __/ |           
              |___/            
*/

/*
** The two inputs in this process:
** NODE CONSTRUCTOR only takes a NEXTID
** But it contains a call to IDBESTOW which takes CONFIG.USEDIDS
**
** TODO Currently requires global: config.usedIDs; that seems sketchy.  Maybe make that internal/private.
*/


/*
** Just takes a nextid
** returns an object of the Node CLASS
*/
class Node {
	constructor(nextID){
		this.first = nameBestow(),
		this.phone = phoneBestow(),
		this.instantiated = (new Date()).getMilliseconds(),
		this.fwd = idBestow(config.usedIDs);
		this.here = nextID;
	}

	/* This method is a getter to use immediately after 
	 	a new node is made, to update the config.SOONID in the globals
	*/
	getNextID() {
		return this.nextID();
	}
}



function nameBestow() {
	const folks = ['Kisha', 'LaTrell', 'Tanifer', 'Terry', 'Moira', 'Grant', 'Ibrahim', 'Gump', 'Klondike', 'Treyvon', 'Eric', 'Sasha', 'Eleanor', 'Noah', 'Dolomite', 'Fernando', 'Caesar' ];
	return folks[ Math.floor( 17 * Math.random()  )   ]
}

function phoneBestow() {
	let ac = [212, 415, 313, 608, 708, 917],
	theirNumber = 0,
	which = Math.floor(Math.random() * 6);
	return Math.floor(Math.random() * 9999999) + ac[which] * 10000000;
}

// stores created IDs in ARR
// and accesses ARR to see if prior redundancy
function idBestow(arr) {
	let fiveDigit = 0,
	notUnique = true;
		if (arr.length > 9999) {
			return 'Maximum array size reached.  All 9999 numbers have been dealt.'
		}
	while (notUnique) {
		fiveDigit = Math.floor(Math.random() * 10000);
		if (arr !== undefined ){
			// array exists.  check it.  if result comes back 
			// TRUE, you've already used this number
			notUnique = arr.some( (item)=> (item === fiveDigit)? true : false   )
		} else {
			// Array of used IDs is empty, so...
			notUnique = false
		}
	}

	// store the new val
	// return the newval
	arr.push(fiveDigit);
	return fiveDigit;
	// todo For some reason this works great but also returns a superluous UNDEFINED at end, which is not a problem but is mysterious.
}


/*----T-E-S-T-E-R-S------------*/
// Accepts a person object.
// Returns nothing.
// Prints a phone number.
function sayPersonsPhone(po) {`Phone, within person-object is ${po.phone}`}



// Tests the function 
function showFiveIds() {
	let i,
	stop;
	for (i = 0, stop = 5; i < stop; i++) {
		console.log(idBestow(config.usedIDs));
	}
}

// Where n is the next ID
// Returns an object of type NODE
function testNodeConstructor( n ) {
	let obj = new Node(n);
	return obj;
}

// Accepts the next ID number
function make99(n) {
	let i = 0,
	stop = 99,
	newNode = null,
	nodeHoldingObject = {};
	for (; i < stop; i++){
		newNode = new Node(n);
		console.log(`About to set next as ${newNode.fwd}`);
		n = newNode.fwd;
		nodeHoldingObject[newNode.here] = newNode
	}
	return nodeHoldingObject;
}


 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               

// Test mode options when run as node
if (process.argv[2] !== undefined) {
	switch (process.argv[2]) {
		case 'node': 
			let newNode = testNodeConstructor(config.soonID);
			console.log(newNode.first);
			console.log(newNode.phone);
			console.log(`About to set next as ${newNode.fwd}`);
			config.soonID = newNode.fwd;
			break;
		case 'id': 
			console.log(idBestow(config.usedIDs));
			break;
		case 'showfiveids': 
			console.log(showFiveIds());
			break;
		case '99': 
			let s = JSON.stringify(make99(config.soonID));
			console.log(s);
			break;
		default:
			console.log('no optional args recognized');		
	}
}

console.log(  phoneBestow()  );
// let n1 = new Node(currentID, soonID);


/* 
0. make  class TESTER
1. make two 
2. put them in an object  TESTER
2. show the object 
0. put another
*/
