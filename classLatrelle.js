/*
Create a linked list.
*/
/*
Careful.  This is an experimental feature branch for running in the NODE REPL.  Once it works it can be merged with the browser-based version of this program.
*/

/*
  _           _   _         
 (_)         (_) | |        
  _   _ __    _  | |_   ___ 
 | | | '_ \  | | | __| / __|
 | | | | | | | | | |_  \__ \
 |_| |_| |_| |_|  \__| |___/
*/



/*_                   _        
 | |                 (_)       
 | |   ___     __ _   _    ___ 
 | |  / _ \   / _` | | |  / __|
 | | | (_) | | (_| | | | | (__ 
 |_|  \___/   \__, | |_|  \___|
               __/ |           
              |___/            
*/

class Node {
	constructor(){
		this.first = nameBestow();
		this.phone = phoneGive();
		this.instantiated = new Date(milliseconds); 
	}
}


function nameBestow() {
	const folks = ['Kisha', 'LaTrell', 'Tanifer', 'Terry', 'Moira', 'Grant', 'Ibrahim', 'Gump', 'Klondike', 'Treyvon', 'Eric', 'Sasha', 'Eleanor', 'Noah', 'Dolomite', 'Fernando', 'Caesar' ];
	return folks[ Math.floor( 17 * Math.random()  )   ]
}

function phoneGive() {
	let ac = [212, 415, 313, 608, 708, 917],
	theirNumber = 0,
	which = Math.floor(Math.random() * 6);
	return Math.floor(Math.random() * 9999999) + ac[which] * 10000000;
}





/*----T-E-S-T-E-R-S------------*/
function sayPhone(n) {console.log(`Simple phone is ${n}`)}
function sayPersonsPhone(po) {`Phone, within person-object is ${po.phone}`}


 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
sayPhone(  phoneGive()  );


/* 
0. make  class TESTER
1. make two 
2. put them in an object  TESTER
2. show the object 
0. put another
*/
