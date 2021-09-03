document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');



console.log('start quiltmain.');
console.log(articles.color);
console.log('Done.');

let divs = '';
divs += articles.testElement;
// divs = 'frogness'
document.getElementById('articlesAnchor').innerHTML = 'glow';
document.getElementById('articlesAnchor').outerHTML = divs;

});
