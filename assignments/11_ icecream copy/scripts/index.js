//click ice cream flavor
//print ice cream flavor

$('#flavor li').click(
    function() {
      var flavor = $(this).text()
      $('#pickFlavor').text(flavor)
      console.log(flavor)
    }
  )

//use variable flavor or else have to replace everywhere that says flavor with flavor = $(this).text()

$('#scoops li').click(
    function() {
      var scoops = $(this).text()
      $('#pickScoops').text(scoops)
      console.log(scoops)
    }
  )