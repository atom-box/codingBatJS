/*
Create a linked list.
Try this without peeking at anything.
*/
/*
Decisions...
I came up with 2 strategies for indicating the last object.  
Chose 'next is null ' and 'prev is null' as indicators of listends
*/

console.log('Huey Morrison');

 //  _           _   _         
 // (_)         (_) | |        
 //  _   _ __    _  | |_   ___ 
 // | | | '_ \  | | | __| / __|
 // | | | | | | | | | |_  \__ \
 // |_| |_| |_| |_|  \__| |___/

const linked = {}; // namespace for all the vars in this module

/* linked.list structure:
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js

		id: {
			first: string
			prev: number
			phone: number
		}

<<<<<<< HEAD
=======

		id: {
			first: string
			prev: number
			phone: number
		}

>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
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

// NODE CLASS
// If given parent-object, phone-int and name-string, generates one node.
// Set this in front of VAR X to get a single node.
// Make a class.  in JS.  for the nodes
class Node {
	constructor(parent, phone, first) {
			// Keep random-ing until your id is not the key to an extant object in the global space of 
			while (linked.list[linked.nextOndeck] !== undefined) { 
				linked.nextOndeck = Math.floor(Math.random() * 99999) ;
				console.log(`Avoided winter's bone.`)
			}
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



			this[id].next = linked.nextOndeck;  // point to key of next node

			// Here, we access the global LINKED.LIST. 
			// TODO Not sure if that is an anti-pattern.
			// Anyway, go back one link and un-null the 'next'.
			// Skip only the first time; if .prev is NULL, we are at the first node, so don't try to go back!
			if (typeof this[id].prev === 'number'){
				let a = this[nextOndeck].prev;
				linked.list.id[a].next = this.id;
			}
	}
	export() {
		return {
			id 
			next
			prev
			phone
			first

		}
	}
}	// END OF NODE CLASS

// TODO test
let temp = new Node(1932, 'Gregor');
console.log(`Yay, we made ${temp}`);
console.log(`Yay, we made ${temp.first}`);

// EXTEND
// If given an object-person will act on global LINKED.LIST, to extend it
// takes Person object  
linked.extend = function(p) {
	linked.newborn = new Node(p.phone, p.first);
	linked.list[linked.newborn.id] = linked.newborn;
	console.log(`Newborn:  ${linked.newborn.id} ${linked.newborn} ${linked.list}.`);
}

// NAMER
// This function takes no args and
// it returns a string name
let person = {};
const namer = function() {
	const folks = ['Kisha', 'LaTrell', 'Tanifer', 'Terry', 'Moira', 'Grant', 'Ibrahim', 'Gump', 'Klondike', 'Treyvon', 'Eric', 'Sasha', 'Eleanor', 'Noah', 'Dolomite', 'Fernando', 'Caesar' ];
	return folks[ Math.floor( 17 * Math.random()  )   ]
}

// PERSON CLASS
function Person() {
		this.first = namer();
		this.phone = Math.floor( 9999999999 * Math.random() )
}; 
<<<<<<< HEAD
<<<<<<< HEAD


=======

>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js

=======

<<<<<<< HEAD


>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
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

let everGrowingObject = ``;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function twoMain() {
      let slider2 = document.getElementById('output2');  
			let str2 = JSON.stringify(makeAny(config.soonID, slider2.value	));
			// TODO could use <br /> instead
			str2 = str2.replace(/{/g , '</p><p>{ ');
			str2 = str2.replace(/}/g , '}</p><p>');
			str2 = '<p>' + str2 + '</p>';
			sol2.innerHTML = `
			<div class="outpanel" style="color:orange; font-family: monospace">${str2}</div>
			`
}
=======
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
linked.button = function() {
	console.log(`Skipper, I'm hurt.`);
	everGrowingObject += { [new Date().toLocaleString()]:  null, freedom: 'medium' }
	objectToHTML()

}

// TODO show growing array in a window.  
// TODO randomly make a name and a phone number 
// make object to grab folks from
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js
=======
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js

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
<<<<<<< HEAD
=======
<form oninput="console.log(33);">
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="linked.button()" > new</button>
</div>
<div class="outpanel" id="output2-outpanel" style="color:transparent">${listSpewage}</div>
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
>>>>>>> parent of c58fe3c... Implement ES6 CLASS for panel output with new, working code from classLatrelle.js

`;




// 3rd tab
let code2El = document.getElementById('code2');
code2El.innerHTML = `
<div>
<p>I wrote tests that are toggled at the command line when running the CLI version of this code. The tests were important because I could not keep all the moving parts of this model in my head reliably.</p>
	<p>I wrote a <a href='https://github.com/atom-box/codingBatJS/blob/master/classLatrelle.js'> CLI version </a> of this first and then adapted it to interact with the <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/two.js"> browser</a>.</p>
	<p>A future improvement would be to implement the recursive strategy from Rober Sedgewick's Algorithms.</p>
</div>
`;