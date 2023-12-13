// Define a calculator function that takes an operation and two numbers
function calculator(operation, num1, num2) {
    // Use a switch statement to perform the operation
    switch(operation) {
        // If the operation is 'add', add the numbers
        case 'add':
            return num1 + num2;
        // If the operation is 'subtract', subtract the numbers
        case 'subtract':
            return num1 - num2;
        // If the operation is 'multiply', multiply the numbers
        case 'multiply':
            return num1 * num2;
        // If the operation is 'divide', divide the numbers
        case 'divide':
            // But first check if the second number is zero
            if(num2 !== 0) {
                return num1 / num2;
            } else {
                // If it is, return an error message
                return 'Error: Division by zero is not allowed';
            }
        // If the operation is none of the above, return an error message
        default:
            return 'Error: Invalid operation';
    }
}

// Test the calculator function with various inputs
console.log(calculator('add', 5, 3));       // Outputs: 8
console.log(calculator('subtract', 5, 3));  // Outputs: 2
console.log(calculator('multiply', 5, 3));  // Outputs: 15
console.log(calculator('divide', 5, 3));    // Outputs: 1.6666666666666667
console.log(calculator('divide', 5, 0));    // Outputs: Error: Division by zero is not allowed
console.log(calculator('mod', 5, 3));       // Outputs: Error: Invalid operation