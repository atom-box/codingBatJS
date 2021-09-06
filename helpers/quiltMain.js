console.log('quiltmain Line 1.');

window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');



console.log('quiltmain Line 8.');

let divs = '';
let singleDiv = '';
let answerHtml = '';

articles.forEach(element => {

    singleDiv = `<article style="background-color:${element.backgroundColor}; color: ${element.textColor};"><div class='gutters';>
    <div class="top-bottom-space"><div>
    <h2 >${element.title}</h2>
    <p>Challenge:</p><div class="white-box"><p>${element.question}</p></div>
    `;
    singleDiv += `<p>Solution:</p>`;
    singleDiv += `<div class="white-box" id="${element.title}">`;
    singleDiv += `<div>`;
    singleDiv += element.answerHtml;
    singleDiv += `</div>`;

    singleDiv += `
    </article>
    `;

    divs += singleDiv;





});
// divs = 'frogness'
// document.getElementById('articlesAnchor').innerHTML = 'glow';
document.getElementById('articlesAnchor').outerHTML = divs;

});
