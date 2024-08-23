//What is the output of the following

console.log("Value of Age is " + age);

var age = 30;

console.log("Value of Age is " + age);

//Output: Value of Age is undefined
//        Value of Age is 30

//Explanation: The first line will give undefined because of the hoisting.
// Whenever we declare a variable it will move on the top of the code but the value will be undefined
// until the line where we initialize the value of age

// What is the output of the following

age=100;

console.log("Value of Age is "+ age);

let age=30;

//Output: Error Cannot access the undefined variable

// Explanation:Because here we are using let keyword and whenever we are using let and const the variable
// will be hoisted but will remain in deaad zone known as Temporal Dead Zone which mean if we are trying to
// access without initializing the variable and to avoid TDZ it is good practice to define the variable before using it.

//What will be the output

myfunc();

var myfunc = function () {
  console.log("Hello First");
};
myfunc();

function myfunc() {
  console.log("Hello Second");
}

myfunc();

// Output: Hello Second
// Hello First
// Hello First

// Explaination:
// The first call to myfunc() runs the function declaration, so it logs Hello Second.
// After myfunc is redefined as a function expression, the next two calls log Hello First.
// This happens because the function declaration is hoisted, but the function expression overrides it once assigned.

var variable = 10;

(() => {
  console.log(variable);

  variable = 20;
  console.log(variable);
})();
console.log(variable);

var variable = 30;

//Output: 10 20 20 Before here inner function will modify the outer function because we are not declaring it.
// So first it will 10 then inside function the value of 10 will be modify to 20 and then also 20

//What is the output

var variable = 10;

(() => {
  console.log(variable);

  var variable = 20;
  console.log(variable);
})();
console.log(variable);

var variable = 30;

//Output: undefined 20 10
// Before here inside the IIFE we are declaring the same variable so first hoisting will be done then assignment to the
// value which will 20 then outer variable will result 10

// What will be the Output:

foo = 30;

console.log(foo);

var foo = 100;

console.log(foo);

//Output: 30
// 100
// Again the concept of hoisting
