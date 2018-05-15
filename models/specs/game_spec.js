const Game = require('../game');
const Player = require('../player');
const Card = require('../card');
const assert = require('assert');

describe('Game', function(){

  beforeEach(function(){
    game = new Game();
    player1 = new Player("Simon");
    player2 = new Player('Bob');
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card('Black Widow', 8, 6, 9);
  });

  it('should start with an empty deck', function(){
    const actual = game.deck;
    assert.deepStrictEqual(actual, []);
  });

  it('should start with no players', function(){
    const actual = game.contestants;
    assert.deepStrictEqual(actual ,[]);
  });

  it('should be able to add cards', function(){
    game.addCardToDeck(card1);
    game.addCardToDeck(card2);
    const actual = game.deck.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to add player', function(){
    game.addPlayer(player1);
    const actual = game.contestants.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to deal cards', function(){
    game.addCardToDeck(card1);
    game.addCardToDeck(card2);
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.dealCards();
    const playerActual = game.contestants[0].hand.length;
    const gameActual = game.deck.length;
    assert.strictEqual(gameActual, 0);
    assert.strictEqual(playerActual, 1);
  });
  

});
