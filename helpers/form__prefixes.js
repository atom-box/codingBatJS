console.log('b00acuda');
// I used reduce, map array ES5 funcs

// object to hold colors whenever new color scheme button is clicked
let restore = {};
// object to hold original colors when page first loads
let original = {};


document.addEventListener('DOMContentLoaded', storeOrigs);


console.log("line 46...");

// store original colors, so less revision hassle
function storeOrigs() {
  let el3 = document.getElementById("exposed1")
  console.log("...stored orig colors succesfully.");
  original.textColor = el3.style.color;
  original.backgroundColor = el3.style.background;    
}


function goDad() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = "#ff0";
  el3.style.background = "#FF69B4";
}

function goContrast() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = "black";
  el3.style.background = "white";
}

function goPrev() {
  let el3 = document.getElementById("exposed1")
  el3.style.color = restore.textColor;
  el3.style.background = restore.backgroundColor;    
}

function goOrig() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = original.textColor;
  el3.style.background = original.backgroundColor;    
}

let words = {};
words.count = 0;
function munch(s) {
	let now = new Date().toLocaleTimeString();
	dummy = 'tre aa oops base';
	words.dirty = s.split(' '); // returns array of raw words
  words.trimmed = words.dirty.map((w)=>{w.trim()} ); //returns array of trimmed words
  words.fewer = ["dummy", "and", "dummier", "chula", "vi", "sta", " mush"];
  // words.trimmed.reduce((acc, curr)=>{ acc + "---" + curr})  // returns shorter array, with empty strings removed
	words.count = words.fewer.length;
	return `First is ${words.fewer[0]} last  is ` + words.fewer[words.count -1];
}

// trim
// return a new shorter array, via reduce, that lacks the "" entries
// lowercase
// sort

