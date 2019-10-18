let dice = {};

dice.roll5 = function() {
	return Math.floor(5 * Math.random()) + 1;
}

// Assignment: implement this as a modification of output from dice.roll5 = function
dice.roll7 = function() {
	return Math.round(7 * dice.roll5() / 7);
}

dice.show5 = function() {
	// dice.el = document.getElementById('diceout');
	dice.el.innerHTML = dice.roll5();
	dice.el.style = `color: blue;`
}

dice.show7 = function() {
	dice.el.innerHTML = `not straightfoward; still working on this`;
	dice.el.style = `color: red;`
}

let sol1 = document.getElementById('solution1');
sol1.innerHTML = `
<h3>Roll a dice with sides of</h3>
<div class="btn-group">
    <button type="button" class="btn btn-primary btn-sm" onclick="dice.show5()" > five</button>
    <button type="button" class="btn btn-danger btn-sm" onclick="dice.show7()" > seven</button>
</div>
<h3 id="diceout" style="color:transparent">null 99</h3>
`;

// take up some space
dice.el = document.getElementById('diceout');
dice.el.innerHTML = `<h3 style="color:transparent; font-family: serif;"> nada surf</h3>`



// MAKE THE CONTENT REACT SO YOU CAN USE JSX,  KEEP IT BASIC
// THEN SOLVE TWO CODE CHALLENGES but don't deploy, debug just as node RePL.
// THEN CALL IT QUITS TO NATL DECISION,


