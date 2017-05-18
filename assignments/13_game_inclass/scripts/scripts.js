
var botChoice = 'rock';
var scoreKeeper = function (result, userPlay, botPlay) {
//add userchoice and botchoice to parameters because the variable is defined below hte function
$('#status').text('You played ' + userChoice + '. Bot played ' + botPlay + '. You ' + result);
}


$('#options li').click(
  function() {
    var userChoice = $(this).text()
    
    switch(userChoice) {
      case botChoice:
        scoreKeeper('tie');
      break;
      case 'rock':
        if (botChoice === 'paper') {
          scoreKeeper('win');
        else {
          scoreKeeper('lose');
        }
      break;
        }
    }
  }
)
//change all to lowercase