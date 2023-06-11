
// Simple To-Do List Application

let todos = []; // Array to store the to-do items

// Function to add a to-do item
const addTodo = (todo) => {
  todos.push(todo); // Add the to-do item to the end of the array
  console.log(`Added: ${todo}`);
};

// Function to remove a to-do item
const removeTodo = (index) => {
  if (index >= 0 && index < todos.length) {
    const removedTodo = todos.splice(index, 1); // Remove the to-do item at the specified index
    console.log(`Removed: ${removedTodo}`);
  } else {
    console.log("Invalid index");
  }
};

// Function to display all to-do items
const displayTodos = () => {
  console.log("To-Do List:");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
};

// Add some to-do items
addTodo("Buy groceries");
addTodo("Finish homework");
addTodo("Go for a run");

// Display the to-do list
displayTodos();

// Remove a to-do item
removeTodo(2);

// Display the updated to-do list
displayTodos();
