// hoister.js


let a = 5;
const b = 55;
var c = 555;
d(c);

function d(argyBargy) {
    console.log(argyBargy);
}

var jellyBeans = (function(){
    var count = 33;
    return {
        increment: function(){
            count++;
        },
        get: () => {
            return count;
        }
    }
})();

console.log(jellyBeans.get());
jellyBeans.increment();
jellyBeans.increment();
jellyBeans.increment();
jellyBeans.increment();
jellyBeans.increment();
jellyBeans.increment();
console.log("The number of beans is " + jellyBeans.count);
console.log(jellyBeans.get());

