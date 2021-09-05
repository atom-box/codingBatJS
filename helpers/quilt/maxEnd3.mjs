// window.addEventListener('DOMContentLoaded', (event) => {
//     const btn = document.getElementById('maxEnd3Button');
//     btn.addEventListener('click', alert('whipping'));
let dice = {};
    dice.roll5 = function() {
    return Math.ceil(5 * Math.random());
}

dice.show5 = function() {
    // dice.el = document.getElementById('diceout');
    console.log( dice.roll5());
}

console.log('end maxEnd3.mjs.');

// });

// THIS does not NEED ANY SPECIAL WRAPPER; Its scope will be fine that way. The wrapper blocks its scope otherwise.
