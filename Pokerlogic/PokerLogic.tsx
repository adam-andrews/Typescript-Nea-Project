class Table {
  players: Player[];
  currentPlayer: object;
  tableCards: Card[];
  tableDeck: Card[];
  playersInRound: Player[];
  pot: number;

  constructor() {
    this.players = [];
    this.currentPlayer;
    this.tableCards = [];
    this.tableDeck = [];
    this.playersInRound = [];
    this.pot = 0;
  }
  addDeck() {
    const newDeck = new Deck();
    this.tableDeck = newDeck.deck;
    console.log(this.tableDeck);
  }
  addPlayer(newPlayer: Player) {
    this.playersInRound.push(newPlayer);
    console.log(this.playersInRound);
  }
  startRound() {
    /*     adds all players currently in to round
     */ this.players.forEach((player) => {
      this.playersInRound.push(player);
    });
    /*     gives all players 2 cards
     */ this.playersInRound.forEach((player) => {
      player.drawHand(this.tableDeck);
    });
    this.tableDrawCard(3);
    this.playersInRound[0].getHandScore(this.tableCards);
  }

  tableDrawCard(amount: number) {
    for (var i = 0; i < amount; i++) {
      var randomCard = this.tableDeck[
        Math.floor(Math.random() * this.tableDeck.length)
      ];
      this.tableCards.push(randomCard);
      this.tableDeck.splice(i, 1);
    }
  }

  bettingRound() {
    this.playersInRound.forEach((player) => {
      const choice: number = player.act();
      if (!choice) {
        console.log("removed player");
      } else if (choice) {
      } else {
        /* playerraised recall bettingRound*/
      }
    });
  }
  checkWinner() {}
  resolveDraw() {}
}
//raise, draw cards, fold, check
//hand balance username score
class Player {
  username: string;
  hand: Card[];
  balance: number;
  score: number;

  constructor(theUsername: string) {
    this.username = theUsername;
    this.hand = [];
    this.balance = 0;
    this.score = 0;
  }

  drawHand(deck: Card[]) {
    for (var i = 0; i < 2; i++) {
      var randomCard: Card = deck[Math.floor(Math.random() * deck.length)];
      this.hand.push(randomCard);
      deck.splice(i, 1);
    }
    return deck;
  }

  getHandScore(tableCards: Card[]) {
    function staightFlush(completeHand: Card[]) {};

    function straight(sortCodeInHand: string[]) {
      let isStraight = false;
      for (var i=0;i<completeHand.length-4;i++){
        const letterI:number = sortCodeInHand[i].charCodeAt(0) + 4;
        if(sortCodeInHand[i+4] === String.fromCharCode(letterI)){
          return !isStraight;
        };
        return isStraight
      }
      
    };

/*     potential problem with 6 of suits
 */    function flush(suitsInHand: string[]) {
      var isFlush:boolean = false;
      for (var i = 0; i < suitsInHand.length - 4; i++) {
        if (suitsInHand[i] === suitsInHand[i + 4]) {
          return (!isFlush);
        }
        return isFlush;
      }
    }
    function pairs(theValues: string[], counter: number) {
      
    }

    const completeHand: Card[] = this.hand.concat(tableCards);
    const suits = completeHand.map((card) => card.suit).sort();
    const values: string[] = completeHand.map((card) => card.sortCode).sort();
    console.log(completeHand);
  }
  /*
   getHandDetails(tableCards) {
      faces.sort()
      const suits = cards.map(a => a[1]).sort()
      const counts = faces.reduce(count, {})
      console.log("counts"+Object.values(counts))
      const duplicates = Object.values(counts).reduce(count, {})
      const flush = suits[0] === suits[4]
      const first = faces[0].charCodeAt(0)red
      //Also handle low straight
      const lowStraight = faces.join("") === "AJKLM"
      faces[0] = lowStraight ? "N" : faces[0]
      const straight = lowStraight || faces.every((f, index) => f.charCodeAt(0) - first === index)
      let rank =
          (flush && straight && 1) ||
          (duplicates[4] && 2) ||
          (duplicates[3] && duplicates[2] && 3) ||
          (flush && 4) ||
          (straight && 5) ||
          (duplicates[3] && 6) ||
          (duplicates[2] > 1 && 7) ||
          (duplicates[2] && 8) ||
          9
  
      return rank;
  
      function byCountFirst(a, b) {
          //Counts are in reverse order - bigger is better
          const countDiff = counts[b] - counts[a]
          if (countDiff) return countDiff // If counts don't match return
          return b > a ? -1 : b === a ? 0 : 1
      }
      function count(c, a) {
          c[a] = (c[a] || 0) + 1
          return c
      }
  }
   */
  act(): number {
    return -1;
  }
  raise(raiseAmount: number) {}
  check() {
    console.log("checked");
  }
  fold() {
    return -1;
  }
}
class Deck {
  suits: string[];
  values: string[];
  sortCodes: string[];
  deck: Card[];

  constructor() {
    const suits = ["h", "c", "d", "s"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "j",
      "q",
      "k",
      "a",
    ];
    const sortCodes = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
    ].reverse();
    this.deck = [];
    for (let suit in suits) {
      for (let i in values) {
        var newCard: Card = new Card(suits[suit], values[i], sortCodes[i]);
        this.deck.push(newCard);
      }
    }
  }
}

class Card {
  suit: string;
  value: string;
  sortCode: string;

  constructor(theSuit: string, theValue: string, theSortCode: string) {
    this.suit = theSuit;
    this.value = theValue;
    this.sortCode = theSortCode;
  }
}

const POKER_Deck = new Deck();

const Adam = new Player("Adam");

const POKER_TABLE = new Table();
POKER_TABLE.addDeck();
POKER_TABLE.addPlayer(Adam);
POKER_TABLE.startRound();
console.log(POKER_TABLE.tableCards);

/* 
class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
   */
