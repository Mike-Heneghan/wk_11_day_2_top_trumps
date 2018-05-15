const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.addCard = function (card) {
  this.hand.push(card);
};

Player.prototype.selectCategory = function (selectedCategory) {
  if (selectedCategory === 'intelligence'){
    return this.hand[0].intelligence;
  }
  else if (selectedCategory === 'stength'){
     return this.hand[0].stength;
  }
  else if (selectedCategory === 'agility'){
     return this.hand[0].agility;
  }
};

module.exports = Player;
