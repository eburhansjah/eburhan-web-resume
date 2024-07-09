let input1;
let input2;
let result;

// Function for JavaScript Calculator
function Compute(operator){
    input1 = parseFloat(document.getElementById("first-input").value);
    input2 = parseFloat(document.getElementById("second-input").value);

    // Checking if both inputs are Numbers
    if(isNaN(input1) || isNaN(input2)){
        result = 'Please enter valid numbers';
    }
    else{
        // Using switch statement to see operators in action:
        switch(operator){
            case '+':
                result = input1 + input2;
                break;

            case '-':
                result = input1 - input2;
                break;

            case '*':
                result = input1 * input2;
                break;

            case '/':
                if(input2 === 0){
                    result = 'undefined';
                } else {
                    result = input1 / input2;
                }
                break;

            case '**':
                // Using for loop to see exponent operator in action:
                if(input2 >= 0){
                    result = 1; // #^0 is always 1
                    for(let j=0; j < input2; j++){
                            result *= input1;
                        }
                } else { // Taking into account of negative exponents
                    result = 1;
                    for (let j = 0; j < -input2; j++) {
                        result *= input1;
                    }
                    result = 1 / result;
                }
                break;

            default:
                result = 'Invalid operator. Please try again';
        }
    }
    // Get the computed-value element
    let outputElement = document.getElementById("computed-value");

    // Set the output value
    outputElement.innerHTML = result;

    // Change color to red if result is negative
    if (typeof result === 'number' && result < 0) {
        outputElement.style.color = 'red';
    } else {
        outputElement.style.color = 'black';
    }
}

// Function to clear inputs
function clearInputs() {
    input1 = input2 = result = null;

    document.getElementById("first-input").value = '';
    document.getElementById("second-input").value = '';
    document.getElementById("computed-value").innerHTML = '';

    // Reset output color to black
    document.getElementById("computed-value").style.color = 'black';
}