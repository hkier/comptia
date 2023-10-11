//create a random number between 1 and 100
let answer = Math.floor(Math.random() * 100) + 1;
// The algorithm for guessing a number between 1 to 100 is as follows:

// Step 1: Set the lower boundary to 0 and the upper boundary to 100. 
//Set the guess counter to 0.
let lower = 0;
let upper = 100;
let guessCounter = 0;
let guess = 0;
let found = false;
//while the found flag is false
while (found == false) {
    // Step 2: Add the upper and lower boundaries together then divide by 2.  
    //Roundup fractional results.  This is your guess.  Increment the guess counter by 1.
    guess = Math.ceil((upper + lower) / 2);
    guessCounter++;
    // Step 3: If your guess is the hidden number, you got it. The game is over.
    if (guess == answer) {
        found = true;
    }
    // Step 4: If your guess is higher than the hidden number, set the lower boundary to your guess.
    else if (guess > answer) {
        lower = guess;
    }
    // Step 5: If your guess is lower than the hidden number, set the upper boundary to your guess.
    else {
        //set the upper boundary to the guess
        upper = guess;
    }
    // Step 6: If not found, go back to step 2.
}
console.log("It took " + guessCounter + " guesses to find the number " + answer);