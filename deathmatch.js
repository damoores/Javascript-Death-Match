
var Fighter = function() {
  this.health=rollDice()*10;
  this.luck=rollDice();
  this.weapon=rollDice();
}
var computerFighter = new Fighter();
var userFighter = new Fighter();
var computerStats = '';
var userStats = '';
var computerHit='';
var userHit='';

function rollDice() {
  return Math.floor((Math.random()*10)+1);
}

function statRollup(theFighter) {
  var stats = '';
  for(property in theFighter) {
    stats += property + ':' + theFighter[property] + '; ';
  }
  return stats;
}

function fightRound () {
  computerHit='';
  userHit='';
  if (computerFighter.luck>rollDice() && computerFighter.health > 0) {
    computerHit=(rollDice()+computerFighter.weapon);
    userFighter.health -= computerHit;
  } else {
    computerHit='missed!';
  }
  if (userFighter.luck>rollDice() && userFighter.health > 0) {
    computerFighter.health -= (rollDice()+userFighter.weapon);
  } else {
    userHit = 'missed!';
  } 
}

function roundStart() {
  alert("holy shit it worked");

}

$('#compStats').replaceWith(statRollup(computerFighter)); //placeholder
$('#userStats').replaceWith(statRollup(userFighter)); //placeholder


alert("Computer HP: " + computerFighter.health + ". " + "Your HP: " + userFighter.health+ ".");

/*for (property in userFighter) {
  userStats += property + ':' + userFighter[property]+' ';
} */