/*
Create a linked list.
Try this without peeking at anything.
*/
/*
Interesting!  
I came up with 2 strategies for indicating the last object.  
1. The ultimate node could just have NULL next ptr. or...
2. The ultimate node could have a boolean flag.
The former seems more 'cool' and I'm guessing it is more orthodox. Go for orthodox, b/c in the end, THAT will be more readable.
*/


const linked = {}; // namespace for all the vars in this module
linked.list = []; // an array of node objects
/* format for objects in the linked.list
id: {
	first: string
	prev: number
	phone: number
}
where id is a unique five digit number

*/
linked.prevOndeck = null;
linked.nextOndeck = Math.floor(Math.random() * 100000) ; // first time only

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
		linked.nextOndeck = Math.floor(Math.random() * 100000) ;
		console.log(`Avoided winter's bone.`)
	}
	this[id].next = linked.nextOndeck;  // point to key of next node
	console.log(this[id].prev, this[id].next, this[id]);
	// If .prev is NULL, we are at the first node
	if (typeof this[id].prev === 'number'){
		let a = this[nextOndeck].prev;
		console.log(typeof a);
		console.log(a);

							// GOTTA CHANGE STRUCTURE OF THAT LINKED LIST  
							// to { 7227: {} }
							// NUMBER MUST BE PARENT, NOT SIBLING

		linked.list.id[a].next = this.id;
	}
	// LAST THING IS TO GO BACK ONE LINK AND UN-NULL THE NEXT.
}	


linked.extend = function(p, f) {
	console.log('coming soon!  TWO.JS logic!');
	linked.newborn = new Node(p, f);
	linked.list.push(linked.newborn);
	console.log(`Length of LINKED.LIST is ${linked.list.length}`);
	// check for links
	// only knows how to PUSH a new node to position at end of the array.



}

// TODO show growing array in a window.  
// TODO randomly make a name and a phone number 



// linked.extend = function() {
//	console.log('coming soon!  TWO.JS logic!');
// }

let sol2 = document.getElementById('solution2');
sol2.innerHTML = `
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="linked.extend(4563888, 'Jessie')" > add</button>
</div>
<h3 id="linkedout" style="color:transparent">null 99</h3>
`;

// take up some space
linked.outEl = document.getElementById('linkedout');
linked.outEl.innerHTML = `<h3 style="color:transparent; font-family: serif;"> nada surf</h3>`


// 3rd tab

let code2El = document.getElementById('code2');
code2El.innerHTML = `
<div>
<p>This took three tries; I'm glad there was more to this question than first assumed!</p>
	<p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/one.js"> solution</a> in javascript</p>
</div>
`;