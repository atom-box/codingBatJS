let dice = {};

dice.roll5 = function() {
	return Math.ceil(5 * Math.random());
}

// Assignment: implement this as a modification of output from dice.roll5 = function
dice.roll7 = function() {
	// 1.59... keeps it below 8 
	dice.seven = (dice.roll5() - 1) * 1.39999999 + (dice.roll5() * (1.39999999/5));
	dice.seven = Math.ceil(dice.seven);
	return dice.seven;
}

dice.show5 = function() {
	// dice.el = document.getElementById('diceout');
	dice.el.innerHTML = dice.roll5();
	dice.el.style = `color: blue;`
}

dice.show7 = function() {
	dice.el.innerHTML = dice.roll7();
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


// 3rd tab

let code1El = document.getElementById('code1');
code1El.innerHTML = `
<div>
<p>Turning the output of a rand5 into a rand7 worked on the second try.  My first solution was illogical: add 7 + 7 + 7 + 7 + 7 and divide by 5.  That creates a Gaussian curve.  I got better results when I divided 7 into five parts, rolled the rand5 die to find which part, then rolled the rand5 again to find how far along in the part.  That gave evenly distributed results.</p>
	<p>My <a href="https://github.com/atom-box/codingBatJS/blob/master/helpers/sevens/one.js"> solution</a> in javascript</p>
</div>
`;



// MAKE THE CONTENT REACT SO YOU CAN USE JSX,  KEEP IT BASIC
// THEN SOLVE TWO CODE CHALLENGES but don't deploy, debug just as node RePL.
// THEN CALL IT QUITS TO NATL DECISION,


