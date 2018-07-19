$(document).ready(function() {
 var totalScore = 0;
 function gameInit(totalWins, totalLosses, scoreMessage) {
   // Load score to match value
   var scoreToMatch = Math.floor((Math.random() * 120) + 19);;
   $('#pointsToMatch').text(scoreToMatch);
   $('#pointsToMatchValue').val(scoreToMatch);
   

   // Load crystal 1 value
   var crystal1Value = Math.floor((Math.random() * 12) + 1);;
   $('#crystal1Value').val(crystal1Value);

   // Load crystal 2 value
   var crystal2Value = Math.floor((Math.random() * 12) + 1);;
   $('#crystal2Value').val(crystal2Value);

   // Load crystal 3 value
   var crystal3Value = Math.floor((Math.random() * 12) + 1);;
   $('#crystal3Value').val(crystal3Value);

   // Load crystal 4 value
   var crystal4Value = Math.floor((Math.random() * 12) + 1);;
   $('#crystal4Value').val(crystal4Value);

   $('#totalScore').text(totalScore);
   $('#totalScoreValue').val(totalScore);

   $('#wins').text(totalWins);
   $('#winsValue').val(totalWins);

   $('#losses').text(totalLosses);
   $('#lossesValue').val(totalLosses);

   $('#scoreMessage').text(scoreMessage);
 } 

 // Start the game
 gameInit(0, 0);

 $('.crystalButton').on('click', function() {
  var getValue = $(this).next('input').val();
  var getTotal =  $('#totalScoreValue').val();

  var newTotalScore = Number(getValue) + Number(getTotal);
  
  $('#totalScore').text(newTotalScore);
  $('#totalScoreValue').val(newTotalScore)

  var pointsToMatchValue = $('#pointsToMatchValue').val();
  var getTotalWins = $('#winsValue').val();
  var getTotalLosses = $('#lossesValue').val();

  // You win!
  if (Number(pointsToMatchValue) === newTotalScore) {
    gameInit(Number(getTotalWins) + 1, getTotalLosses, 'You win!');  
  }

  // You lose!
  if (newTotalScore > pointsToMatchValue) {
    gameInit(getTotalWins, Number(getTotalLosses) + 1, 'You lost!');  
  }
 });
});