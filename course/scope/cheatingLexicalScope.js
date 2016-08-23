/*
We can cheat lex scope using eval keyword. For example we can shadow global bar using eval keyword
 */

var bar = "bar";

function foo(str) {
    eval(str);
    console.log(bar); //will print 1 except bar
}

foo("var bar = 1;");

/*
Second option for cheating lexical scope it with keyword
 */

var obj = {
    a: 1,
    b: 2,
    c: 3,
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

//same with shorthend

with(obj){
    a = b + c;
    c = b - a;
    d = 3 //it create global variable beacause with create own lexical scope
}

obj.d // undefined
d; //3 global variable



