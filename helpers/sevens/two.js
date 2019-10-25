/*
Create a linked list.
Try this without peeking at anything.
*/
/*
Decisions...
I came up with 2 strategies for indicating the last object.  
Chose 'next is null ' and 'prev is null' as indicators of listends
*/

console.log(`youuuuu twoooooooo`);

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
	linked.list[linked.newborn.id] = linked.newborn;
	console.log(`Newborn:  ${linked.newborn.id} ${linked.newborn} ${linked.list}.`);
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
linked.main = function() {
	// for (a of linked.list){
	// 	console.log( a + '  ' + linked.list[a]);
	// }
	console.log(`Main sees ${Object.keys(linked.list)}...`);
	linked.temp =  new Person();
	console.log(`...and ${linked.temp}.`);
	linked.extend(linked.temp);
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

// content for before and after button push
let listSpewage = `<h3>null 99<br><br></h3>`;

let sol2 = document.getElementById('solution2');
sol2.innerHTML = `
<form oninput="console.log(33);">
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="spewDivs()" > spew</button>
</div>
<div class="outpanel" id="output2-outpanel" style="color:transparent">${listSpewage}</div>
<form>
`;

// Create element of results
function spewDivs() {
	linked.outEl = document.getElementById('output2-outpanel');
	let nit = `<h3 style="color:orange;"> sooooooooieeeeeee<br><br></h3>`
	listSpewage += nit;
	linked.outEl.innerHTML = listSpewage;

}



// 3rd tab
let code2El = document.getElementById('code2');
code2El.innerHTML = `
<div>
<p>This is not very interesting to look at.  It was very straightforward to implement.</p>
	<p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/two.js"> solution</a> in javascript</p>
</div>
`;