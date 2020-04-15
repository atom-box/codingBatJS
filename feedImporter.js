/*
Build a script that will update the product-related data on a site:

Prepare data – this the bulk of developer work in constructing an import.
Identify relevant data within the newly provided data.
1) Structure a .csv of relevant data.
2) Specify a previous import for comparison.
3) Specify the “live” data we use on our site.
4) Feed these three data sources to your difference handler, which will compare all three and then generate events that incorporate desired new data into our data storage systems. Flag any conflicts.
*/

console.log('feed.js is running');

function myFunction(){
  document.getElementById('sku-a4').innerHTML = 'this is the stuff of dreams';
}

function otherFunction(){
  document.getElementById('sku-a3').innerHTML = 'won\'t work if script at top';
}

document.onload = otherFunction();