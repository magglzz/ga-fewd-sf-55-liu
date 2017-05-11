// Define a function makeCone.

// It should accept two parameters, flavor and numberScoops.

//makecone function definition
//var makeCone = function (flavor, numberScoops) {
//  console.log('Coming right up')
//  console.log('Flavor: ' + flavor);
//  console.log('Scoops: ' + numberScoops);
//}
//makecone function call
//passing arguments chocolate and 3 
//that correspond to the flavor and numberScoops
//makeCone ('chocolate', 3);
// if you have two function calls, then they will show both. when you define 
//variable twice the last one defined is what matters, but different for function calls
//makeCone ('vanilla', 1);

// The function should take the parameters and log the following to the console:
// "Coming right up! One {flavor} ice cream cone with {numberScoops} scoops."

// Hint: You'll want to use string concatenation (+) to combine the variables
// with the human-readable text when logging the message to the console.

// Now, call that function, passing in "chocolate" and 3 as the arguments.

// You should see the following messages:

// "Coming right up!" Flavor: chocolate" Scoops: 3"
console.log('Get ready for some ice-cream!');

var makeCone = function (flavor, numberScoops) {
  $('#message').text('Coming right up! One ' + flavor + ' ice cream cone with ' + numberScoops + ' scoops.');
}

makeCone('vanilla', 1);
makeCone('chocolate', 3)

//var flavor 
//var scoops
//on click flavor, set flavor

var setFlavor = function () {
  // Read the contents of the clicked flavor
  $('.flavor').click(function(){
    var flavor = $( this ).html(".flavor");
    $("#result").html("#chocolate")
  })
  $('.flavor').text();

  // Save it to pickedFlavor
  console.log(pickedFlavor);
  // console.log(pickedFlavor);
}

$('.flavor').click(setFlavor);

//on click scoops, set scoops
//find order details placeholder
//update it's contents with flavor + numberScoops