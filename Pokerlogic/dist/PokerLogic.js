"use strict";
var Table = /** @class */ (function () {
    function Table() {
        this.players = [];
        this.currentPlayer;
        this.tableCards = [];
        this.tableDeck = [];
        this.playersInRound = [];
        this.pot = 0;
    }
    Table.prototype.addDeck = function () {
        var newDeck = new Deck();
        this.tableDeck = newDeck.deck;
        console.log(this.tableDeck);
    };
    ;
    Table.prototype.addPlayer = function (newPlayer) {
        this.playersInRound.push(newPlayer);
        console.log(this.playersInRound);
    };
    ;
    Table.prototype.startRound = function () {
        var _this = this;
        /*     adds all players currently in to round
         */ this.players.forEach(function (player) {
            _this.playersInRound.push(player);
        });
        /*     gives all players 2 cards
         */ this.playersInRound.forEach(function (player) {
            player.drawHand(_this.tableDeck);
        });
        this.tableDrawCard(3);
        this.playersInRound[0].getHandScore(this.tableCards);
    };
    ;
    Table.prototype.tableDrawCard = function (amount) {
        for (var i = 0; i < amount; i++) {
            var randomCard = this.tableDeck[Math.floor(Math.random() * this.tableDeck.length)];
            this.tableCards.push(randomCard);
            this.tableDeck.splice(i, 1);
        }
        ;
    };
    ;
    Table.prototype.bettingRound = function () {
        this.playersInRound.forEach(function (player) {
            var choice = player.act();
            if (!choice) {
                console.log("removed player");
            }
            else if (choice) { }
            else {
                /* playerraised recall bettingRound*/
            }
            ;
        });
    };
    ;
    Table.prototype.checkWinner = function () { };
    ;
    Table.prototype.resolveDraw = function () { };
    ;
    return Table;
}());
;
//raise, draw cards, fold, check
//hand balance username score
var Player = /** @class */ (function () {
    function Player(theUsername) {
        this.username = theUsername;
        this.hand = [];
        this.balance = 0;
        this.score = 0;
    }
    Player.prototype.drawHand = function (deck) {
        for (var i = 0; i < 2; i++) {
            var randomCard = deck[Math.floor(Math.random() * deck.length)];
            this.hand.push(randomCard);
            deck.splice(i, 1);
        }
        ;
        return (deck);
    };
    ;
    Player.prototype.getHandScore = function (tableCards) {
        var completeHand = this.hand.concat(tableCards);
        var suits = completeHand.map(function (card) { return card.suit; }).sort();
        var values = completeHand.map(function (card) { return card.sortCode; }).sort();
        console.log(completeHand);
        console.log("the suits" + suits);
        console.log("the values" + values);
    };
    ;
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
    Player.prototype.act = function () {
        return -1;
    };
    ;
    Player.prototype.raise = function (raiseAmount) { };
    ;
    Player.prototype.check = function () {
        console.log("checked");
    };
    ;
    Player.prototype.fold = function () {
        return -1;
    };
    ;
    return Player;
}());
;
var Deck = /** @class */ (function () {
    function Deck() {
        var suits = ["h", "c", "d", "s"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
        var sortCodes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"].reverse();
        this.deck = [];
        for (var suit in suits) {
            for (var i in values) {
                var newCard = new Card(suits[suit], values[i], sortCodes[i]);
                this.deck.push(newCard);
            }
            ;
        }
        ;
    }
    ;
    return Deck;
}());
var Card = /** @class */ (function () {
    function Card(theSuit, theValue, theSortCode) {
        this.suit = theSuit;
        this.value = theValue;
        this.sortCode = theSortCode;
    }
    return Card;
}());
var POKER_Deck = new Deck();
var Adam = new Player("Adam");
var POKER_TABLE = new Table();
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
