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
    stats += property + ':' + theFighter[property] + ' ';
  }
  return stats;
}

function fightRound () {
  if (computerFighter.health < 0 || userFighter.health < 0) {
    if (computerFighter.health > userFighter.health) {
      $('#winner').html('YOU LOSE!');
      $('#winnerAlert').show('slow');
      return;
    } else {
      $('#winner').html('YOU WIN!!');
      $('#winnerAlert').show('slow');
    } 
    return;
  }
  computerHit='';
  userHit='';
  if (computerFighter.luck>rollDice() && computerFighter.health > 0) {
    computerHit=(rollDice()+computerFighter.weapon);
    userFighter.health -= computerHit;
    $( "#userFight" ).effect( "shake", {times:1}, 200 );
  } else {
    computerHit = 'missed!';
  }

  if (userFighter.luck>rollDice() && userFighter.health > 0) {
    userHit=(rollDice()+computerFighter.weapon);
    computerFighter.health -= userHit;
      $( "#compFight" ).effect( "shake", {times:1, direction:"right"}, 200 );
  } else {
    userHit = 'missed!';
  }
  $('#computerStats').html(statRollup(computerFighter));
  $('#userStats').html(statRollup(userFighter));
  $('#computerHitAlert').append("The computer hit: " + computerHit + '<br />');
  $('#userHitAlert').append("Your hit: " + userHit + '<br />');

}
  
function roundStart() {
  fightRound();
}


