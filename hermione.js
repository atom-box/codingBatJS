/*Serve markup from an array using either the Array.map() and join() methods.  or in one step, use reduce.*/

var wizards = [
	{
		name: 'Harry Potter',
		house: 'Gryfindor'
	},
	{
		name: 'Cedric Diggory',
		house: 'Hufflepuff'
	},
	{
		name: 'Tonks',
		house: 'Hufflepuff'
	},
	{
		name: 'Ronald Weasley',
		house: 'Gryfindor'
	},
	{
		name: 'Hermione Granger',
		house: 'Gryfindor'
	}
];

let crispr = ["crispr",["CRISPR","CRISPR gene editing","CRISPR interference","CRISPR-Display","CRISPR/Cpf1","CRISPR/Cas Tools","CRISPR-Cas9","CRISPR (film documentary)","Crisp (racehorse)","Crisp, Richard"],["CRISPR () (clustered regularly interspaced short palindromic repeats) is a family of DNA sequences found within the genomes of prokaryotic organisms such as bacteria and archaea.","CRISPR gene editing is a method by which the genomes of living organisms may be edited.  It is based on a simplified version of the bacterial CRISPR/Cas (CRISPR-Cas9) antiviral defense system.","CRISPR interference (CRISPRi) is a genetic perturbation technique that allows for sequence-specific repression of gene expression in prokaryotic and eukaryotic cells.","CRISPR-Display (CRISP-Disp) is a modification of the CRISPR/Cas9 (Clustered regularly interspaced short palindromic repeats) system for genome editing.","Clustered Regularly Interspaced Short Palindromic Repeats from Prevotella and Francisella 1 or CRISPR/Cpf1 is a DNA-editing technology analogous to the CRISPR/Cas9 system.","CRISPR/Cas Tools are software platforms and bioinformatics tools built to facilitate the design of guide RNAs (gRNAs) for use with the CRISPR/Cas system.","","","",""],["https://en.wikipedia.org/wiki/CRISPR","https://en.wikipedia.org/wiki/CRISPR_gene_editing","https://en.wikipedia.org/wiki/CRISPR_interference","https://en.wikipedia.org/wiki/CRISPR-Display","https://en.wikipedia.org/wiki/CRISPR/Cpf1","https://en.wikipedia.org/wiki/CRISPR/Cas_Tools","https://en.wikipedia.org/wiki/CRISPR-Cas9","https://en.wikipedia.org/wiki/CRISPR_(film_documentary)","https://en.wikipedia.org/wiki/Crisp_(racehorse)","https://en.wikipedia.org/wiki/Crisp,_Richard"]]


let huffs = [];
wizards.reduce(   (acc, v)=>{
	if(v.house==='Hufflepuff') {huffs.push(v.name)} 
}, '');

console.log(`Array of huffles has ${huffs.length} wizards. They are `);

huffs.map( (w)=>{console.log(w)} );

