// Define a function named "calcuLator" using an arrow function expression.
// It takes three parameters: "operator" for the arithmetic operation, "num1" as the first number, and "num2" as the second number.
const calcuLator = (operator, num1, num2) => {
    let result;
  
    // Use a switch statement to perform different arithmetic operations based on the value of "operator".
    switch (operator) {
      case "+":
        result = num1 + num2; // Add "num1" and "num2"
        break;
      case "-":
        result = num1 - num2; // Subtract "num2" from "num1"
        break;
      case "/":
        result = num1 / num2; // Divide "num1" by "num2"
        break;
      case "%":
        result = num1 % num2; // Calculate the remainder of "num1" divided by "num2"
        break;
      default:
        throw new Error("Invalid operator"); // Throw an error if the operator is invalid
    }
  
    return result; // Return the calculated result
  };
  
  try {
    let input = calcuLator("%", 34, 5); // Call the calcuLator function with the operator, and numbers num1 and num2.
    console.log(input);
  } catch (error) {
    console.log(error.message); // Output: Invalid operator
  }