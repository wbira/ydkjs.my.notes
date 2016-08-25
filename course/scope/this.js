/* every function while executing has a reference
 to its current execution context called this 
 
 Exexution context is related to when and how to functions is called.

 In "building metaphor" where lex scope was about going througt all floors 
 of the building into top, this keyword is related to address of building,
 where it's placed in city

 There are four rules about defining how this keyword is bound. Is is always objest, 
 it is not a simple value type like number
 */


/*
Binding rules - default binding - is a latest rule
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
foo()

//IIFE

(function foo (){
    console.log(this.bar);
})()

var bar = "bar1";
