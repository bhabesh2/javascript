// Function Start

// Immediately Invoked Function Expression (IIFE)
// This is an anonymous function that is immediately invoked.
// It creates a function scope to encapsulate variables and prevent polluting the global scope.
// It declares variables 'a' and 'b', and performs an operation (a + b),
// Example:
(function () {
  let a = 20;
  let b = 30;
  // console.log(a + b)
})();

// Named Function - Add

// This function takes two parameters, 'a' and 'b', and returns the sum of the two.
// The function is named 'add'.
// Example:
function add(a, b) {
  return a + b;
}

let ans = add(2, 3); // The add function is invoked (call) with arguments 2 and 3, and the result is stored in the 'ans' variable.

console.log(ans); // The value stored in 'ans' is printed to the console.

// Anonymous Function - PrintName

/*
  const printName = (name) => {
    let message = `Hi ${name}, how are you?`;
    console.log(message);
  }
  
  printName("Bhabesh");
  */

// Arrow Function - PrintAge

/*
  const printInfo = (name, age) => {
    return obj = {
      name,
      age
    };
  }
  
  let printObj = printInfo("Bhabesh", 23);
  
  console.log(printObj);
  */
