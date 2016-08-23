var foo = function bar () { // it's not function declaration'
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo; //function
    }
    baz();
}

foo();
bar();

/*
Diff between function declaration and function expression:
- function declaration is when function keyword is very first word (thing) in the statement
- otherwise is function expression

When we have function expression e.g bar it's name exits only in local scope, so that's why
we got reference error in line 12. 

Anonymous function is function expression.

Why anonymous function expression is bad?
1. It's not possible to refer tu function itself (no recurrsion)
2. Debugging issue, expecially with minified code (when it's not anonymous there is a named trace in stack trace')
3. If it has a name makes code more readable and understandable

 */

var foo;

try{
    foo.length;
}
catch (err){
    console.log(err) // will print type error
}

console.log(err) //will throw reference error because catche create block scope