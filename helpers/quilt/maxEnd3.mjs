window.addEventListener('DOMContentLoaded', (event) => {
//     const btn = document.getElementById('maxEnd3Button');
//     btn.addEventListener('click', alert('whipping'));
let dice = {};

dice.roll5 = function() {
    return Math.ceil(5 * Math.random());
}

dice.show5 = function() {
    // dice.el = document.getElementById('diceout');
    dice.el.innerHTML = dice.roll5();
    dice.el.style = `color: blue;`
}

});