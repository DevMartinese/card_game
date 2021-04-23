
let deck = [];
let types = ["C", "D", "H", "S"];
let especials = ["A", "J", "Q", "K"];

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(`${i + type}`);
    }
  }

  for (let type of types) {
    for (let esp of especials) {
      deck.push(`${esp + type}`);
    }
  }

  deck = _.shuffle(deck);
  // console.log(deck)
  return deck;
};

createDeck();

const getCard = () => {
  if (deck.length === 0) throw "No hay cartas";

  const card = deck.pop();

  console.log(deck);
  console.log(card);

  return card;
};

for (let i = 0; i <= 100; i++) {
  getCard();
}
