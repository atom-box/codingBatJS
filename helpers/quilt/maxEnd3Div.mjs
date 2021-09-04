document.addEventListener('DOMContentLoaded', (event) => {

    let anchor = document.getElementById('maxEnd3');
    let webform = `
        <h3>Notice the distribution of results as you repeatedly roll a dice with sides of</h3>
        <div class="btn-group">
            <button type="button" class="btn btn-primary btn-sm" onclick="dice.show5()" > five</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="dice.show7()" > seven</button>
        </div>
        <h3 id="diceout" style="color:transparent">null 99</h3>

        `;
    anchor.innerHTML = webform;
});
