//this is a quick routine which will take 
//an input and then return the factorial of that 
//number.  

const factorial = function(input) {
    console.log("Here I am in the factorial function"   + input)
    //check to make sure that the input is a number
    if (typeof input !== 'number') {
        console.log(input)
        return 'Please enter a number';
    }
    //check to make sure that the input is a positive number    
    if (input < 0) {
        return 'Please enter a positive number';
    }
    //check to make sure that the input is not a decimal
    if (input % 1 !== 0) {
        return 'Please enter a whole number';
    }
    //check to make sure that the input is not 0
    if (input === 0) {
        return 1;
    }
    //if the input is a positive whole number, then calculate the factorial
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    return result;
    }