const Game = function(){
  this.deck = [];
  this.contestants = [];
}

Game.prototype.addCardToDeck = function (card) {
  this.deck.push(card);
};

Game.prototype.addPlayer = function (player) {
  this.contestants.push(player);
};

Game.prototype.dealCards = function () {
  let handLength = this.deck.length/this.contestants.length;
  for(player of this.contestants){
    for(let i = 0; i < handLength; i++){
      player.addCard(this.deck.pop());
    }
  }
};

module.exports = Game;
