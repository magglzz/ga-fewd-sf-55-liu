$('#grayButton').click(
  function() {
    $('body').css('background-color', 'gray')
    $('body').css('color','white')
    console.log('gray working')
  }
)
$('#whiteButton').click(
  function() {
    $('body').css('background-color', 'white')
    $('body').css('color','gray')
  }
)

