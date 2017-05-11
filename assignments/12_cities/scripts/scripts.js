// when form is submitted
$('#city-picker').submit(
  function(event){
    event.preventDefault()
//remove current background image
    var imageclass = $('body').attr('class');
    $('body').removeClass(imageclass);
//read entered city
    var city = $('#city-type').val();
    if(city === 'SF' || city ==='San Francisco' || city === 'Bay Area') {
      $('body').addClass('sf');
    }
    else if (city === 'NYC' || city === 'New York' || city === 'New York City'){
      $('body').addClass('nyc');
      console.log('nyc working')
    }
    else if (city === 'LA' || city === 'LAX' || city === 'Los Angeles'){
      $('body').addClass('la');
    }
    else if (city === 'Austin' || city === 'ATX'){
      $('body').addClass('austin');
    }
    else if (city === 'Sydney' || city === 'SYD'){
      $('body').addClass('sydney');
    }
//if city is not supported then return alert
    else {
      alert('city not supported');
    }
  }
  )
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