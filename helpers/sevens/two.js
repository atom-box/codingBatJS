/*
Create a linked list.
Try this without peeking at anything.
*/
/*
Decisions...
I came up with 2 strategies for indicating the last object.  
Chose 'next is null ' and 'prev is null' as indicators of listends
*/

 //  _           _   _         
 // (_)         (_) | |        
 //  _   _ __    _  | |_   ___ 
 // | | | '_ \  | | | __| / __|
 // | | | | | | | | | |_  \__ \
 // |_| |_| |_| |_|  \__| |___/

const linked = {}; // namespace for all the vars in this module

/* linked.list structure:

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

// make a class.  in JS.  for the nodes
function Node(phone, first){
	let id = linked.id;
	this[id] = {};
	this[id].phone = phone || 5551212; // int
	this[id].first = first || 'Andre'; // string PERSONNAME 

	// id was gen'd below, during previous run of this function. Or, was set for the first time only, up top, when the vars were initialized 
	this[id].first = first;
	this[id].phone = phone;

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



// takes Person object  
linked.extend = function(p) {
	linked.newborn = new Node(p.phone, p.first);
	linked.list[linked.newborn.id] = 
	linked.list.push(linked.newborn);
	console.log(`SHOULD spew ${linked.list.length} divs.`);
}


// This function takes no args and
// it returns a string name
let person = {};
const namer = function() {
	const folks = ['Kisha', 'LaTrell', 'Tanifer', 'Terry', 'Moira', 'Grant', 'Ibrahim', 'Gump', 'Klondike', 'Treyvon', 'Eric', 'Sasha', 'Eleanor', 'Noah', 'Dolomite', 'Fernando', 'Caesar' ];
	return folks[ Math.floor( 17 * Math.random()  )   ]
}

function Person () {
		this.first = namer();
		this.phone = Math.floor( 9999999999 * Math.random() )
}; 



 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
// sends a new PERSON object to EXTEND and then
// calls SPEWDIVS to display the 
//global LINKED LIST
linked.main = function() {;
	linked.extend( new Person() );
	spewDivs();	
}


// TODO show growing array in a window.  
// TODO randomly make a name and a phone number 
// make object to grab folks from

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
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="linked.main()" > add</button>
</div>
<h3 id="linkedout" style="color:transparent">null 99<br><br></h3>
`;

// Create element of results
function spewDivs() {
	linked.outEl = document.getElementById('linkedout');
	linked.outEl.innerHTML = `<h3 style="color:orange; font-family: serif;"> nada surf<br>clash REBEL<br>SOUND SYSTEM</h3>`
}



// 3rd tab
let code2El = document.getElementById('code2');
code2El.innerHTML = `
<div>
<p>This took three tries; I'm glad there was more to this question than first assumed!</p>
	<p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/one.js"> solution</a> in javascript</p>
</div>
`;