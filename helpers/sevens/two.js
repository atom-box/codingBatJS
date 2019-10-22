/*
Create a linked list.
Try this without peeking at anything.
*/



const linked = {}; // namespace for all the vars in this module
linked.list = []; // an array of node objects

// make a class.  in JS.  for the nodes
function Node(phone, first){
	this.phone = phone || 5551212; // int
	this.first = first || 'Andre'; // string PERSONNAME 
	this.prev = null;  // point to key of prev node
	this.next = null;  // point to key of next node
	// TODO make non NULL
}	



linked.extend = function() {
	console.log('coming soon!  TWO.JS logic!');
	linked.newborn = new Node(5);
	linked.list.push(linked.newborn);
	console.log(`First item in list is ${linked.list[0].first}`);
}




// linked.extend = function() {
//	console.log('coming soon!  TWO.JS logic!');
// }

let sol2 = document.getElementById('solution2');
sol2.innerHTML = `
<h3>Add an element to a linked list:</h3>
    <button type="button" class="btn btn-danger btn-sm" onclick="linked.extend()" > add</button>
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