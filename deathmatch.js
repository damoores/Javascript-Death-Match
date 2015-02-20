
var Fighter = function() {
  this.health=rollDice()*10;
  this.luck=rollDice();
  this.weapon=rollDice();
}
var computerFighter = new Fighter();
var userFighter = new Fighter();
var computerStats = ' ';
var userStats = ' ';

function rollDice() {
  return Math.floor((Math.random()*10)+1);
}

for (property in computerFighter) {
  computerStats += property + ':' + computerFighter[property]+'; ';
}
alert("Computer fighter's stats: " + computerStats);

for (property in userFighter) {
  userStats += property + ':' + userFighter[property]+'; ';
}
alert("Your fighter's stats are: " + userStats);

while (computerFighter.health >0 && userFighter.health > 0) {
  if (computerFighter.luck>rollDice()) {
    userFighter.health -= (rollDice()+computerFighter.weapon);
  } 
  if (userFighter.luck>rollDice()) {
    computerFighter.health -= (rollDice()+userFighter.weapon);
  }
}

alert("Computer HP: " + computerFighter.health + ". " + "Your HP: " + userFighter.health+ ".");