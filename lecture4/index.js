// Objects here:

/**
 * In JavaScript everything is an Object.
 * Objects are a complex data type in JavaScript.
 * Object is a key-value or name-value pair.
 * Object can store any kind of data types as key-value pair.
 * Objects consist of properties and can have methods.
 * Object is declared using curly braces {}.
 * Properties can be accessed using dot notation or bracket notation.
 * Objects can be created using object literal syntax, constructors, or classes.
 */

/*
let arr = ['name','Rohan',2,3,4] // check the type of this array.
console.log(typeof arr) // Object.
*/

/*

function add(a,b){
    return a+b;
}
add(2,3);

console.log(typeof add); // function . remember functions are also objects.

Functions in JavaScript are considered "first-class citizens," meaning they can be assigned to variables, passed as arguments, and returned as values.
*/

/*
Custom Object.

let obj = {
    name : "bhabesh", 
    age : 27,
    city: "Mangaldai"
}
here name, age, city are keys and bhabesh, 27, and Mangaldai are values.
so it's like 
key : value,
*/
/*

let obj = {
    name: 'bhabesh',
    age: 23,
    city: 'Mangaldai'
}

console.log(obj['name']); // accessing the value of name.
console.log(obj['age']); // accessing the value of age.
console.log(obj['city']); // accessing the value of city.

*/

// Define an object called obj
const obj = {
    name: 'bhabesh',
    assets: 50000,
    liabilities: 30000,
    net_worth: function () {
        // Calculate the net worth by subtracting liabilities from assets
        return (this.assets - this.liabilities);
        // 'this' refers to the current object (obj) that is invoking the method
        // It allows us to access the properties of the object from within the method
    }
};

// Call the net_worth function of the obj object and print the result to the console

console.log(obj.net_worth()); // Output $20000

// Note:: The 'this' keyword in JavaScript is used to refer to the current object and access its properties and methods from within that object.
