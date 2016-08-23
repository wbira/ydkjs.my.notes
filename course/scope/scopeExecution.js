var foo = "bar";

function bar()  {
    var foo = "baz;"
    
    function baz(foo){
        foo = "bam";
        bam = "yay";
    }

    baz();
}

bar();
foo; //bar
bam; //yay
baz()// reference error

/* 
During compilation phase we declare item in these order:
- var foo (global)
- function bar (global)
- var foo (bar)
- function baz (bar)
- var foo (baz)
*/
