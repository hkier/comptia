function findAce(deck) {
  let counter = 0;
  
// Step 1: Flip over the first card.
  for (let i = 0; i < deck.length; i++) {
    // Step 2: add 1 to our counter.
    counter++;
    // Step 3: If this is the ace of diamonds, then we are done.
    if (deck[i].suit === 'diamonds' && deck[i].value === 'ace') {
      return counter;
    }
    // Step 4: If we have not run out of cards, go back to step 1.
  }
  // Step 5: Tell everybody we lost the ace of diamonds!
}


