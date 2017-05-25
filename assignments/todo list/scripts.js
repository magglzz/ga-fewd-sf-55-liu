$(document).ready(function (){
//on click of add button
//stop form resubmisstion
//get value of todo input
//create list item with todo value
// add new list item at the bottom of list
// clear text from todo input

  $('#addbutton').click(
    function(event){
      event.preventDefault()

  var newTask = $('#task').val();
  console.log(newTask);
  //look for input and replace value with nothing
  $('#task').val('');

  //var newElement = '<li><label><input type="checkbox"><span>' + newTask + '</span></label></li>';
  //$('#todo-list').append(newElement);
  var newElement = $('#template').clone();
  newElement.attr('id','');
  newElement.find('span').text(newTask);
  newElement.appendTo('#todo-list');
  
  })
  $('#clearbutton').click(
    function(event){
      event.preventDefault()

       $('#todo-list :checked').each(
       function(){
// look in inspect and see that this refers to just the check box, we want the whole li
       $(this).closest('li').remove();
  //     var removeTasks = doneTasks.remove();
        console.log('removed');

       });
  });
});

