//for-direction
for (var i = 0; i < 10; i--) {
}

//getter-return
p = {
    get name(){
        // no returns.
    }
};

//no-await-in-loop
async function foo(things) {
    const results = [];
    for (const thing of things) {
        // Bad: each loop iteration is delayed until the entire asynchronous operation completes
        results.push(await bar(thing)); //here
    }
    return baz(results);
}

//no-compare-neg-zero
if (x === -0) {
}

//no-cond-assign
// Check the user's job title
if (user.jobTitle = "manager") {
    // user.jobTitle is now incorrect
}

//no-console
console.log("Made it here.");

//no-constant-condition
if (false) {
    doSomethingUnfinished();
}

//no-control-regex
var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");

//no-debugger
function isTruthy(x) {
    debugger;
    return Boolean(x);
}

//no-dupe-args
function foo(a, b, a) {
    console.log("value of the second a:", a);
}

//no-dupe-keys
var foo = {
    bar: "baz",
    bar: "qux"
};

//no-duplicate-case
var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:         // duplicate test expression
        break;
    default:
        break;
}

//no-empty
if (foo) {
}

//no-empty-character-class
var foo = /^abc[]/;

//no-ex-assign
try {
    // code
} catch (e) {
    e = 10;
}

//no-extra-boolean-cast
if (!!foo) {
    // ...
}

//no-extra-parens
a = (b * c);

//no-extra-semi
var x = 5;;

//no-func-assign
function foo() {}
foo = bar;

//no-inner-declaration
if (test) {
    function doSomethingElse () { }
}

//no-invalid-regex
RegExp('[')

// no-irregular-whitespace
 const o = 42;

//no-obj-calls
var math = Math();

// no-prototype-builtins
var hasBarProperty = foo.hasOwnProperty("bar");

//no-regex-spaces
var re = /foo   bar/;

//no-sparse-arrays
var items = [,,];

//no-template-curly-in-string
"Hello ${name}!";

//no-unexpected-multiline
var foo = bar
(1 || 2).baz();

//no-unreachable
function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}

//no-unsafe-finally
(() => {
    try {
        return 1; // 1 is returned but suspended until finally block ends
    } catch(err) {
        return 2;
    } finally {
        return 3; // 3 is returned before 1, which we did not expect
    }
})();

//no-unsafe-negation
if (!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

//use-isnan
if (foo == NaN) {
    // ...
}

//valid-jsdoc
/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

//valid-typeof
typeof foo === "strnig"