/*
We use let keywor for declare variable in block scope. It can be easily use with for loop or in if block e.g 
We need only pair of braces.

*/

function foo() {
    var bar = "bar";
    for(let i=0; i <bar.length; i++){
        console.log(bar.charAt(i));
    }
    console.log(i) //will throw reference error
}


/* 
Issues with let
- let is not hoisted
- todo temprorary dead zone
*/