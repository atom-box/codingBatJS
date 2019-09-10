console.log('barracuda');

// object to hold colors whenever new color scheme button is clicked
let restore = {};
// object to hold original colors when page first loads
let original = {}



document.addEventListener('DOMContentLoaded', sayHi);
document.addEventListener('DOMContentLoaded', storeOrigs);

function sayHi() {
  console.log("line 44...");
}

console.log("line 46...");

// store original colors, so less revision hassle
function storeOrigs() {
  let el3 = document.getElementById("exposed1")
  console.log("...stored origs");
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

