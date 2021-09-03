document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');



console.log('start quiltmain.');
console.log(articles[1].backgroundColor);
console.log('Done.');

let divs = '';
singleDiv = '';

articles.forEach(element => {

    singleDiv = `<article style="background-color:${element.backgroundColor}; color: ${element.textColor};"><div class='gutters';>
    <h2 >How\'s this?</h2>
    <p>The background-color is: ${element.backgroundColor}</p></div>
    `;
    singleDiv += `
    </article>
    `;

    divs += singleDiv;





});
// divs = 'frogness'
// document.getElementById('articlesAnchor').innerHTML = 'glow';
document.getElementById('articlesAnchor').outerHTML = divs;

});
