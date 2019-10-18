let dice = {};

dice.roll5 = function() {
	return 5 * Math.random();
}

// Assignment: implement this as a modification of output from dice.roll5 = function
dice.roll7 = function() {
	return 7 * dice.roll5() / 7;
}


dice.show5 = function() {
	dice.el5 = document.getElementById('diceout5');
	console.log(dice.roll5());
}

dice.show7 = function() {
	dice.el7 = document.getElementById('diceout7');
	console.log(dice.roll7());
}




let sol1 = document.getElementById('solution1');
sol1.innerHTML = `
<form ><label>Gotta roll a dice with sides of </label><button type="button" onclick="dice.show5()"> five </button> 
<p id="diceout5"></p>

<label>Gotta roll a dice with sides of </label><button type="button" onclick="dice.show7()"> seven </button>
<p id="diceout7"></p>
</form>
`;

// take up some space
dice.el5 = document.getElementById('diceout5');
dice.el5.innerHTML = `<p style="color:transparent"> nada surf</p>`



// MAKE THE CONTENT REACT SO YOU CAN USE JSX,  KEEP IT BASIC
// THEN SOLVE TWO CODE CHALLENGES but don't deploy, debug just as node RePL.
// THEN CALL IT QUITS TO NATL DECISION,


