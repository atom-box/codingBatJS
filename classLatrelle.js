/* NEXT ACTION IS KEEP WRITING GIMME FIVE
*/




/*
Create a linked list.
*/
/*
Careful.  This is an experimental feature branch for running in the NODE REPL.  Once it works it can be merged with the browser-based version of this program.
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
** argument: b, h, obj  
** (previousID, currentID, entire
** obj,needed for checking whether 
** a nextID is already taken)
** TODO Currently requires global: config.usedIDs; that seems sketchy.  Maybe make that internal/private.
*/
class Node {
	constructor(nextID){
		this.first = nameBestow(),
		this.phone = phoneBestow(),
		this.instantiated = (new Date()).getMilliseconds(),
		this.fwd = idBestow(config.usedIDs);
	}



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
function sayPersonsPhone(po) {`Phone, within person-object is ${po.phone}`}


// returns an array of n unique ids, no initial ids
function testIDs(n) {
	let i = 0,
	IDs = [];
	for (i = 0, stop = n; i < stop; i++ ){
		let y = idBestow()
		IDs.unshift(y);
		console.log(y);
	}
	return IDs;
}

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
		default:
			console.log('no optional args recognized');		
	}
}

console.log(  phoneBestow()  );
// let n1 = new Node(currentID, soonID);


// console.log(`Test eleven IDs:`);
// console.log(testIDs(11));



/* 
0. make  class TESTER
1. make two 
2. put them in an object  TESTER
2. show the object 
0. put another
*/
