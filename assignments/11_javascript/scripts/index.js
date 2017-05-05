// var currentYear;
// var name;
// var year;

var currentYear = 2017;
var name = prompt('What is your name?');
var yob = prompt('What year were you born?');

$('#salutation').text('Hello ' + name);

var age = currentYear - yob;

// if this condition is met, I want this message to be displayed in the message placeholder in html
if (age >= 25) {
  $('#message').text('Happy rental');
}
// else if they are 21-25 i want this message to show after salutation
else if (age < 25 && age >= 21 ) {
  $('#message').text('Pay up');
  //I'm saying Jquery ($) look for messages id and put this text in there
}
else {
  $('#message').text('Take the bus');
}


// We notice that we are writing the same code 3 times in the conditions
//means there is a more efficient way to write this
var rentalMessage;

if (age >= 25) {
  rentalMessage = 'Happy rental'
}
// else if they are 21-25 i want this message to show after salutation
else if (age < 25 && age >= 21 ) {
  rentalMessage = 'Pay up'
  //I'm saying Jquery ($) look for messages id and put this text in there
}
else {
  rentalMessage = 'Take the bus'
}

$('#message').text(rentalMessage);