const Card = require('../card');
const assert = require('assert');

describe('Card', function(){

  let card = null;

  beforeEach(function(){

    card = new Card("Superman", 6, 9, 7);

  });

  it('should have a name', function(){
    const actual = card.name;
    assert.strictEqual(actual, 'Superman');
  });

  it('should have an intelligence rating', function(){
    const actual = card.intelligence;
    assert.strictEqual(actual, 6);
  });

  it('should have a strength property', function() {
    const actual = card.strength;
    assert.strictEqual(actual, 9);
  });

  it('should have an ability property', function(){
    const actual = card.agility;
    assert.strictEqual(actual, 7);
  });
});
