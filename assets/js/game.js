let deck = [];
let types = ['C', 'D', 'H', 'S'];
let especials = ['A', 'J', 'Q', 'K'];

const createDeck = () => {
  for(let i = 2; i <= 10; i++) {
    for(let type of types) {
      deck.push(`${i + type}`)
    }
  };

  for (let type of types) {
    for (let esp of especials) {
      deck.push(`${esp + type}`)
    }
  }

  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

createDeck();