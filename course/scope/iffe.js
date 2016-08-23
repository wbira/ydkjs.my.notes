var foo = "foo";

(function IFFE(bar){
    
    var foo = bar;
    console.log(foo);

})(foo);

console.log(foo);

/*
IIFE - immediately invoked function expression
- when we want to hide sth in diff scope
- we didn't use named function expression, we didn't want to polute outer scope so
    that's  why we don't want create artificial variable

*/ 