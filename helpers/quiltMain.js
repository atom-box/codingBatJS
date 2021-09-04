document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');



console.log('start quiltmain.');
console.log(articles[1].backgroundColor);
console.log('Done.');

let divs = '';
singleDiv = '';

articles.forEach(element => {

    singleDiv = `<article style="background-color:${element.backgroundColor}; color: ${element.textColor};"><div class='gutters';>
    <h2 >${element.title}</h2>
    <p>Challenge description: ${element.question}</p></div>
    `;

    singleDiv += `<div id="${element.title}">`;

    singleDiv += `
    </article>
    `;

    divs += singleDiv;





});
// divs = 'frogness'
// document.getElementById('articlesAnchor').innerHTML = 'glow';
document.getElementById('articlesAnchor').outerHTML = divs;

});
