//example of hoisting

var a = b();
var c = d();

a;
c;

function b() {
    return c;
}

var d = function (){
    return b();
}

//javascript engine order

function b() {
    return c;
}
var a;
var c;
var d;
a = b();
c = d(); //referece error beacause d is undefined
a; 
c;
d = function(){
    return b();
}
/* So function expression is not hoisted, before we call function expression it should be declared */