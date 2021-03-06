/* every function while executing has a reference
 to its current execution context called this 
 
 Exexution context is related to when and how to functions is called.

 In "building metaphor" where lex scope was about going througt all floors 
 of the building into top, this keyword is related to address of building,
 where it's placed in city
 
 This keyword allows reusing functions againts multiple context, 
without explicite passing context into that function. 
It provides mechanism  for implicite passing object reference

Confusions
1. this isn't refers to the function itself
2. this refers to the function scope => we cannot use this for creating bridge between lexical scopes of functions 
see examples in https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md

There are four rules about defining how this keyword is bound. Is is always objest, 
it is not a simple value type like number.

Order of rules:
1. new binding
2. Explicite/hard binding
3. Implicit binding (object owning the call)
4. Default binding

*****Default binding *******
It's applied when called function is stand alone. It isn't attached 
to any object. Its just a function. Its also applies to an IIFE patterns.

In default rules this can be one of two things: undefined or global object.
It's depend on wheather code is executed in strict mode or not.
So strict mode => undefined
non strict mode => global object

Here is an example of default binding rule
*/

function foo (){
    'use strict'
    console.log(this.bar);
}

var bar = "bar1";
foo();

//IIFE

(function foo (){
    console.log(this.bar);
})()

var bar = "bar1";

/******* Implicit binding rule ************
this rule is applied when function is a called as
a property of anther object, and these object is
an executuion context for our funstion

*/

function foo () {
    console.log(this.bar);
}

var o2 = { bar : "bar2", foo: foo }
var o2 = { bar : "bar3", foo: foo }

o2.foo(); //bar2
o3.foo(); //bar3

/*****************  Explicite binding rule **********************
We can choose te execution context using call or apply
and put as an argument object, that will be our 
execution context
*/

function foo (){
    console.log(this.bar);
}

var bar = "bar1";
var obj = {bar: "bar2"};
foo();
foo.call(obj);

/* ******************Hard binding **************************
Hard biding is a reusable pattern for connecting function with specific execution context.
ES5 provided built-in utility for hard binding caleed bind : Function.prototype.bind.

In ES6 bounded function has a name property, that derives name from original function.

******************* exception ***********************

1 Ignoring this: if you pass null or undefined as a parameter to call, apply or bind
these tools will use default binding rule to examine this.

There are additional two features:

a.) apply with nyll call can spread out array (like ... operator from ES6)

foo.apply( null, [2, 3] ); // a:2, b:3

b.) bind utility can currying

var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3

*/