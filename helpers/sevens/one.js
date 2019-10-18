let dice = {};

dice.roll5 = function() {
	return 5 * Math.random();
}

// Assignment: implement this as a modification of output from dice.roll5 = function
dice.roll7 = function() {
	return 7 * dice.roll5() / 7;
}

dice.show5 = function() {
	// dice.el = document.getElementById('diceout');
	console.log(dice.roll5());
}

dice.show7 = function() {
	// dice.el = document.getElementById('diceout');
	console.log(dice.roll7());
}

let sol1 = document.getElementById('solution1');
sol1.innerHTML = `
<h3>Roll a dice with sides of</h3>
<div class="btn-group">
    <button type="button" class="btn btn-primary btn-sm" onclick="dice.show5()" > five</button>
    <button type="button" class="btn btn-primary btn-sm" onclick="dice.show7()" > seven</button>
</div>
<p id="diceout"></p>
`;

// take up some space
dice.el = document.getElementById('diceout');
dice.el.innerHTML = `<p style="color:transparent"> nada surf</p>`



// MAKE THE CONTENT REACT SO YOU CAN USE JSX,  KEEP IT BASIC
// THEN SOLVE TWO CODE CHALLENGES but don't deploy, debug just as node RePL.
// THEN CALL IT QUITS TO NATL DECISION,


