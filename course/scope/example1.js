var foo = "bar";

function bar()  {
    var foo = "baz;"
}

function baz(foo){
    foo = "bam";
    bam = "yay";
    console.log(b);
}

bar();

baz("qux")


/*
In line 1 we have bascicly 2 statements. Declaration and assigment.


COMPILATION PHASE:
JavaScript compiler will go through the file for looking variable and function declarations
In line 1 will see function declaration and it will assign it to the current scope (it means global scope in this case)

Then it will find declaration fo bar function and also compiler will assing these dalcaration to global scope.
Then it will move to line 4 and it will find declaration of variable foo. Because it's in local scope of bar it will 
assing it to bar.

In line 7 compiler will declare function baz. Then will find declaration of foo (beacause function parameters are treated
like declaration of local variables.) It will assign foo to scope of baz. 
After these step COMPILER WILL FINISH his job

EXECUTION PHASE:
Durring execution phase all declarations (variables and function) are going to dissapear.

LHS => left hand side of equal operator (target, where we put soruce)
RHS => right hand side of equal operator, or even bettet not left hand side
 (retrieve source, get value)

Starting execution

Engine will ask scope if there is a variable foo accesible in current scope. (If so, engine will use it, 
if not, it will try find in in another scope). 
Yes it is, so scope will return a reference to foo and then we can assign "bar" statment to foo. 
(If the right would be something more complicated, e.g variable engine will ask scope about RHS reference)

After function bar engine will try execute baz. It will be almost the same like in bar, except line 9.
In line 9 engine will ask:
E:"Hey scope of baz, do you have LHS reference to bam"
S:"No, never heard"
E:"Hey global scope, do you know something about bam?
S:"No, but I will create global variable bam for you (THIS IS BAD)

DIFF between LHS and RHS
1. RHS => if engine will perform RHS lookup e.g variable b, and it will fails (including global and all nested scopes) engine will throw REFERENCE ERROR
2. LHS => if LHS lookup fails there are two cases:
    a.) program is running in non strict mode => global scope will create new variable of the name
    b.) program is running in strict mode => engine will trhow REFERENCE ERROR like in RHS

Type Error is when enginge try execute-as-function a non-function value, or reference a property on a null or undefined value

So Reference Error is related to scope issue, TypeError is a illegal operation
*/