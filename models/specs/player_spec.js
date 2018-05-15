const Player = require('../player');
const Card = require('../card');
const assert = require('assert');

describe('Player', function(){

  let player = null;

  beforeEach(function(){

    player = new Player("Simon");
    card = new Card("Superman", 6, 9, 7);
  });

  it('should have a name', function(){
    const actual = player.name;
    assert.strictEqual(actual, "Simon");
  });

  it('should start with an empty hand', function(){
    const actual = player.hand;
    assert.deepEqual(actual, []);
  });

  it('should be able to recieve card', function(){
    player.addCard(card);
    const actual = player.hand.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to select category', function(){
    player.addCard(card);
    const actual = player.selectCategory('intelligence');
    assert.strictEqual(actual, 6);
  });

});
