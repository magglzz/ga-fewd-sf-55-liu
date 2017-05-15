$(document).ready(function (){

    // if values are the same, 
    //1 point user, 1 point bot, 
    //status = tie
  
//if user clicks win (rock)
//  $('#options li').click(
//    function () {
//     var userchoice = $(this).text()
//      console.log(userchoice);
var humanScore = 0
var botScore = 0  
$('#rock').on('click', function() {
    switch (botChoice) {
      case 'rock':
      $('#status').text('tie');
      $('#humanScore').text(humanScore + 1);
      $('#computerScore').text(botScore + 1);
      break;
    case 'scissors':
      $('#status').text('win');
      $('#humanScore').text(humanScore + 1);
      break;
    case 'paper':
      $('#status').text('lose');
      $('#computerScore').text(botScore + 1);
      break;
    }
})

$('#scissors').on('click', function() {
  switch (botChoice) {
    case 'rock':
      $('#status').text('lose');
      $('#computerScore').text(botScore + 1);
      break;
    case 'scissors':
      $('#status').text('tie');
      $('#humanScore').text(humanScore + 1);
      $('#computerScore').text(botScore + 1);
      break;
    case 'paper':
      $('#status').text('win');
      $('#humanScore').text(humanScore + 1);
      break;
  }
})

$('#paper').on('click', function() {
  switch (botChoice) {
    case 'rock':
      $('#status').text('win');
      $('#humanScore').text(humanScore + 1);
      break;
    case 'scissors':
      $('#status').text('lose');
      $('#computerScore').text(botScore + 1);
      break;
    case 'paper':
      $('#status').text('tie');
      $('#humanScore').text(humanScore + 1);
      $('#computerScore').text(botScore + 1);
      break;
  }
})
  
var choices = ['rock', 'paper', 'scissors'];
var botChoice = choices[Math.floor(Math.random() * choices.length)];
//bot chooses lose (paper or scissors)
//1 point user 1 point bot
//status win

//if user clicks lose()

  //user clicks scissors
//listen for user's click

//get value of user's click
//bot chooses choice
//get value of bot's choice

//compare user choice to bot choice
//set status
//print score on scoreboard



})