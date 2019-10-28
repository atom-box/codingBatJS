/*
Create a linked list.
Try this without peeking at anything.
*/
/*
There is a linked list in Sedgewick's Algorithms that seems to use a recursive strategy: the node's last act of its initiation is to create...another node!  That could be implemented as an improvement here.

I am uncomfortable with having an IDBestow function inside the Class constructor which refers to an external object.  For now not sure what the more clean coding pattern would be there.
*/

console.log('Huey Morrison');

 //  _           _   _         
 // (_)         (_) | |        
 //  _   _ __    _  | |_   ___ 
 // | | | '_ \  | | | __| / __|
 // | | | | | | | | | |_  \__ \
 // |_| |_| |_| |_|  \__| |___/

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


// Accepts the next ID number
function makeAny(n, stop) {
	let i = 0,
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
                                                               



 			const LISTIES	 = 11;
			let str3 = JSON.stringify(makeAny(config.soonID, LISTIES	));
			// TODO could use <br /> instead
			str3 = str3.replace(/{/g , '</p><p>{ ');
			str3 = str3.replace(/}/g , '}</p><p>');
			str3 = '<p>' + str3 + '</p>'


/*
 _____     ____    __  __ 
 |  __ \   / __ \  |  \/  |
 | |  | | | |  | | | \  / |
 | |  | | | |  | | | |\/| |
 | |__| | | |__| | | |  | |
 |_____/   \____/  |_|  |_|
                           
*/



let sol2 = document.getElementById('solution2');
sol2.innerHTML = `
<form oninput="console.log(33);">
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="linked.button()" > new</button>
</div>
<div class="outpanel" id="output2-outpanel" style="color:orange; font-family: monospace">${str3}</div>
<form>
`;

// Create element of results
// Accepts one object
// Fills the ID in DOM with the keys and values
function objectToHTML(o) {
	// console.log(`size of linkedlist is ${linked.list.length}`)
	// for (n in linked.list) {
	// 	console.log(`${n} is ${linked.list[n]}`);
	// }

	let nit = `<p style="color:orange;">${s} </p>`
	listSpewage += nit;
	linked.outEl.innerHTML = listSpewage;

}



// 3rd tab
let code2El = document.getElementById('code2');
code2El.innerHTML = `
<div>
	<p>I wrote a <a href='https://github.com/atom-box/codingBatJS/blob/master/classLatrelle.js'> CLI version </a> of this first and then adapted it to interact with the <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/two.js"> browser</a>. The former contains my personal best for systematic testing on a small code object.</p>
	<p>A future improvement would be to implement the recursive strategy from Rober Sedgewick's Algorithms.</p>
</div>
`;