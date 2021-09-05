console.log('quiltmain Line 1.');

window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');



console.log('quiltmain Line 8.');

let divs = '';
let singleDiv = '';
let answerHtml = '';

articles.forEach(element => {

    singleDiv = `<article style="background-color:${element.backgroundColor}; color: ${element.textColor};"><div class='gutters';>
    <h2 >${element.title}</h2>
    <p>Challenge description: ${element.question}</p></div>
    `;

    singleDiv += `<div id="${element.title}">`;
    singleDiv += element.answerHtml;

    singleDiv += `
    </article>
    `;

    divs += singleDiv;





});
// divs = 'frogness'
// document.getElementById('articlesAnchor').innerHTML = 'glow';
document.getElementById('articlesAnchor').outerHTML = divs;

});
