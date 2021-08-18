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

// namespace for all the vars in this module
const linked = {}; 

/* schema for the object LINKED.LIST:

		id: {
			first: string
			prev: number
			phone: number
		}

				where id is a unique 
				five digit number
*/
linked.list = {}; // Obj of objs, each as described above
linked.prevOndeck = null; // flags it as the first node
linked.nextOndeck = Math.floor(Math.random() * 99999) ; // ids are 5 digit


/*_                   _        
 | |                 (_)       
 | |   ___     __ _   _    ___ 
 | |  / _ \   / _` | | |  / __|
 | | | (_) | | (_| | | | | (__ 
 |_|  \___/   \__, | |_|  \___|
               __/ |           
              |___/            
*/

/*TESTED                    */
/*                       TESTED */
// make a class.  in JS.  for the nodes
function Node(p){
	let id = linked.id;
	this[id] = {};
	this[id].phone = p.phone || 5551212; // int
	this[id].first = p.first || 'xxxx xxxxxx'; // string PERSONNAME 

	// was initialized, above, or set during the most recent object creation event
	this[id].prev = linked.prevOndeck;  // point to key of prev node

	// prevOndeck usually must store, temporarily, the current node ID
	linked.prevOndeck = this.id;

	// Keep random-ing until your id is not the key to an extant object
	while (linked.list[linked.nextOndeck] !== undefined) { 
		linked.nextOndeck = Math.floor(Math.random() * 99999) ;
		console.log(`Avoided winter's bone.`)
	}

	this[id].next = linked.nextOndeck;  // point to key of next node

	// Here, we access the global LINKED.LIST. 
	// TODO Not sure if that is an anti-pattern.
	// Anyway, go back one link and un-null the 'next'.
	// Skip only the first time; if .prev is NULL, we are at the first node, so don't try to go back!
	if (typeof this[id].prev === 'number'){
		let a = this[nextOndeck].prev;
		linked.list.id[a].next = this.id;
	}
}	// END OF NODE CLASS


/*NOT TESTED                    */
/*                       TESTED */
// takes Person object  
linked.extend = function(p) {
	linked.newborn = new Node(p.phone, p.first);
	linked.list[linked.newborn.id] = linked.newborn;
	console.log(`Newborn:  ${linked.newborn.id} ${linked.newborn} ${linked.list}.`);
}


/*TESTED                    */
/*                       TESTED */
// This function takes no args and
// it returns a string name
let person = {};
linked.namer = function() {
	const folks = ['Kisha', 'LaTrell', 'Tanifer', 'Terry', 'Moira', 'Grant', 'Ibrahim', 'Gump', 'Klondike', 'Treyvon', 'Eric', 'Sasha', 'Eleanor', 'Noah', 'Dolomite', 'Fernando', 'Caesar' ];
	return folks[ Math.floor( 17 * Math.random()  )   ]
}


/*TESTED                    */
/*                       TESTED */
function Person () {
		this.first = linked.namer();
		this.phone = Math.floor( 9999999999 * Math.random() )
}; 

/*----T-E-S-T-E-R-S------------*/


function showKeys(o) {
	console.log(Object.keys(o));
}
function showVals(o) {
	for (k in o){
	console.log(o[k]);
	} 
}

// testprintanode
(function(){
	console.log(`Start TESTPRINTNODE`);
	// redundantly conveniently declare the inits here
	linked.list = {}; // Obj of objs, each as described above
	linked.prevOndeck = null; // flags it as the first node
	linked.nextOndeck = Math.floor(Math.random() * 99999) ; // 
	let pers = new Person();
	console.log(`About to pass ${pers} to NEWNODE`) 
	let temp = new Node(pers);
	console.log(`This is the node we produced using PERSONTEMP`) 	
	showKeys(temp); // TODO for some reason, this is undefined
	showVals(temp); // But this works.
	})();

// testprintaperson 
(function(){
	console.log(`Start TESTPRINTPERSON`);
	let temp = new Person();
	console.log(`I am ${temp.first}`);
	console.log(`Call me at: ${temp.phone}`);
	showKeys(temp);
	showVals(temp);
})();



 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               



/* 
1. make a node.
2. display it as an annotated Line 
*/

// test Person object
// test Node object
// test linked.namer function
// test linked.extend


