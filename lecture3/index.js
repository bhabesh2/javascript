// Array in JavaScript.

/**
 * In JavaScript, an array is a data structure that can store multiple values of different data types.
 * It is defined using square brackets [] and can contain elements separated by commas.
 * The elements can be of any data type, including numbers, strings, booleans, objects, null, undefined, etc.
 * Example: [12, "name", true, false, null, undefined, {name: 'name', age: 23}]
 * 
 * Arrays in JavaScript have several built-in methods and properties that allow manipulation and access to their elements.
 * Some commonly used array methods include:
 * - push(): Add elements to the end of an array.
 * - pop(): Remove the last element from an array.
 * - shift(): Remove the first element from an array.
 * - unshift(): Add elements to the beginning of an array.
 * - splice(): Add or remove elements from a specific position in an array.
 * - slice(): Create a new array by extracting a portion of an existing array.
 * - concat(): Concatenate two or more arrays to create a new array.
 * - indexOf(): Find the index of a specified element in an array.
 * - forEach(): Execute a provided function once for each array element.
 * - map(): Create a new array by applying a function to each element of an existing array.
 * - filter(): Create a new array with all elements that pass a certain condition.
 * - reduce(): Apply a function to reduce an array to a single value (from left to right).
 * 
 * These are just a few examples, and there are many more methods and properties available for working with arrays in JavaScript.
 * Arrays are a versatile and fundamental data structure in JavaScript, commonly used for storing and manipulating collections of data.
 */

const fruits = ['apple','banana','mango','papaya'];

console.log(fruits[0]) // apple
console.log(fruits[1]) // banana
console.log(fruits[2]) // mango
console.log(fruits[3]) // papaya


// push method:
fruits.push('orange', 'grape'); // Add 'orange' and 'grape' to the end of the array
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'papaya', 'orange', 'grape']

// pop method:
fruits.pop(); // Remove the last element from the array
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'papaya', 'orange']

// shift method:
fruits.shift(); // Remove the first element from the array
console.log(fruits); // Output: ['banana', 'mango', 'papaya', 'orange']

// unshift method:
fruits.unshift('kiwi', 'pineapple'); // Add 'kiwi' and 'pineapple' to the beginning of the array
console.log(fruits); // Output: ['kiwi', 'pineapple', 'banana', 'mango', 'papaya', 'orange']

// splice method:
fruits.splice(2, 1, 'pear', 'watermelon'); // Replace 1 element at index 2 with 'pear' and 'watermelon'
console.log(fruits); // Output: ['kiwi', 'pineapple', 'pear', 'watermelon', 'mango', 'papaya', 'orange']

// slice method:
const slicedFruits = fruits.slice(1, 4); // Extract elements from index 1 to index 4 (excluding index 4)
console.log(slicedFruits); // Output: ['pineapple', 'pear', 'watermelon']

// concat method:
const moreFruits = ['grapefruit', 'cherry'];
const combinedFruits = fruits.concat(moreFruits); // Concatenate two arrays
console.log(combinedFruits); // Output: ['kiwi', 'pineapple', 'pear', 'watermelon', 'mango', 'papaya', 'orange', 'grapefruit', 'cherry']

// indexOf method:
const index = fruits.indexOf('mango'); // Find the index of 'mango'
console.log(index); // Output: 4

// forEach method:
fruits.forEach((fruit) => {
  console.log(fruit); // Output each fruit in the array
});

// map method:
const uppercaseFruits = fruits.map((fruit) => {
  return fruit.toUpperCase(); // Create a new array with uppercase versions of each fruit
});
console.log(uppercaseFruits); // Output: ['KIWI', 'PINEAPPLE', 'PEAR', 'WATERMELON', 'MANGO', 'PAPAYA', 'ORANGE']

// filter method:
const filteredFruits = fruits.filter((fruit) => {
  return fruit.length > 5; // Create a new array with fruits having more than 5 characters
});
console.log(filteredFruits); // Output: ['pineapple', 'watermelon']

// reduce method:
const totalLength = fruits.reduce((accumulator, fruit) => {
  return accumulator + fruit.length; // Calculate the total length of all fruits in the array
}, 0);
console.log(totalLength); // Output: 38
