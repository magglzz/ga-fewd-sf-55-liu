$('#grayButton').click(
  function() {
    $('#darktheme').attr('href', 'styles/darktheme.css')
    console.log('gray working')
  }
)

$('#whiteButton').click(
  function() {
    $('#darktheme').attr('href', 'styles/lighttheme.css')
    console.log('white working')
  }
)
