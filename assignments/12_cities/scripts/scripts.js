//load JS after DOM
//find the document and whne it's ready, execute the function
//element, event, what to do in case of the event
$(document).ready(function (){
  //execute the whole code




})

// when form is submitted
$('#city-picker').submit(
  function(event){
    event.preventDefault()

//remove current background image
      var imageclass = $('body').attr('class');
      $('body').removeClass(imageclass);
  //read entered city
      var city = $('#city-type').val();
//city variable becomes city in lowercase
      city = city.toLowerCase();


switch (city) {
  // if city name is sf 
  //stack cases to combine conditions
  case 'sf':
  case 'san francisco':
  case 'bay area':
  //do this
    $('body').addClass('sf');
  //need break in order to stop code from going all the way through
    break;
    //if city name is nyc
  case 'nyc':
  //do this
    break;
  default
    if (type(elem)) == undefined
      alert('please enter a city')
    break;
}
      if(city === 'sf' || city ==='san francisco' || city === 'bay area') {
        $('body').addClass('sf');
      }
      else if (city === 'nyc' || city === 'new york' || city === 'new york city'){
        $('body').addClass('nyc');
        console.log('nyc working')
      }
      else if (city === 'la' || city === 'lax' || city === 'los angeles'){
        $('body').addClass('la');
      }
      else if (city === 'austin' || city === 'atx'){
        $('body').addClass('austin');
      }
      else if (city === 'sydney' || city === 'syd'){
        $('body').addClass('sydney');
      }
  //if city is not supported then return alert
      else {
        alert('city not supported');
    }
  }
  );
//read entered city

//check if supported city
//    $('body').css('background-image', 'url/(../images/sf.jpg)');
//    console.log('sf working');
//  }
//update background to supported city (set body class to city)
//else alert "city not supported"



//$( '#city-picker' ).submit(function( event ) {
//  if ( $( "input:first" ).val() === "SF" ) {
//    $( 'body' ).css('background-image', 'url/(../images.sf.jpg' ).show();
//    return;
//}
//  $( 'p' ).text( "Not valid!" ).show().fadeOut( 1000 );
//  event.preventDefault();
//});