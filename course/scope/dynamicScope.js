function foo() {
    console.log(bar); //dynamic
}

function baz(){
    var bar = "qux";
    foo();
}

baz();

/*
In upper example there is a skeleton about how dynamic scoping should work.
So when javascript engine will execute line 2 in lexical "mode", should throw
reference error. But when we consider these example as a skeleton od dynamic language
it should look at the call site, so it should check where foo was called.
So if scope in this call site contains bar it should take a reference to bar.

So lexical scope is resolved during compile phase, and dynamic scope is resolved in runtime.
*/