const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];

createDeck = () => {
  const deck = [];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push(values[i] + " of " + suits[j]);
    }
  }
  let shuffledDeck = [];
  while (deck.length > 0) {
    shuffledDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
  }
  return shuffledDeck;
};

console.log(createDeck());

// Write code here to console.log all 52 cards using the two arrays above.
// Output should look like:

// A of Hearts
// A of Spades
// A of Diamonds
// A of Clubs
// 2 of Hearts
// 2 of Spades
// 2 of Diamonds
// 2 of Clubs
// 3 of Hearts
// 3 of Spades
// 3 of Diamonds
// 3 of Clubs
// and so on...

// YOUR CODE HERE:
