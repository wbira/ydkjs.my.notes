/*Primitive types:
number, string, boolean, undefined, null (null is also primitive but typeof null returns object)

Types in js:
primitive types + objects + symbol (es6)

Special object sub types:
1. function : normal object with special callable behaviour
2. arrays : (arrays assumes numeric indexing)

In specification exist some built-in types like: String, Number, Array, Function, Object, etc...
Better to use literal form rather than constructed form.
Differences:
*/

var str = "Some string";
typeof str // string
str instanceof String //false

var str2 = new String("Some string2");
typeof str2 // object
str2 instanceof String //true

/*

Object can store other values of any type in properties. The engine stores values in implementation-dependent ways, and may very well not store them in some object container. What is stored in the container are these property names, which act as pointers (technically, references) to where the values are stored.

ES6 introduces computed property name, so now the name of property can be computed in when we using literal form of constructed objects
*/
var prefix = "foo";

var myObject = {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world"
};

myObject["foobar"]; // hello
myObject["foobaz"]; // world

//Property descriptor example (ES5)
var myObject = {};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );

myObject.a = 3;

myObject.a; // 2
