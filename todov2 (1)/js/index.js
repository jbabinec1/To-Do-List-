$(document).ready(function() {
  var $addForm = $('#todo-form');
  var $taskInput = $addForm.find('#todo-input');
  var $todoList = $('.tasks-parent li');
  var fadeSpeed = 300;

  })


//Priorities btn display list of urgency with 3 buttons
  var $prioritiesContainer = $('.priorities');
  var $prioritiesList = $prioritiesContainer.find('.priorities-list');
  var $choosePriorityBtn = $prioritiesContainer.find('.choose-priorety');
  var $prioritiesBtns = $prioritiesContainer.find('.priority button');


 $choosePriorityBtn.on('click',function() {
 $prioritiesList.toggle({direction:"left"});
  });
 $prioritiesBtns.on('click',function() {
 $choosePriorityBtn.removeClass('low medium high').addClass($(this).attr('class'));
 $prioritiesList.hide();
  });



/// Add task when enter key is pressed
 $("#todo").keydown(function (e) {
    if (e.which == 13)
     addItem();
  });

  // On clicking the add button
 $('#add-task').on('click',function() {
    addItem();
  })

 function addItem () { 
  //get class
  var priority_class = $('.choose-priorety')
   .clone()
   .removeClass('choose-priorety')
   .attr('class');

   // append to the list
 $(".tasks").append('<li class="' + priority_class + '"><input type= "checkbox" class="toggle" /><span>' + $("#todo-input").val() + '</span> <small><a href="#edit">Edit</a> &bull; <a href="#delete">Delete</a></small></li>');        
}
  // Delegate the events to dynamically generated elements
  // For the edit button
 $(document).on("click", 'a[href="#edit"]', function () {               
  // Make the span editable  
 $(this).closest("li").find("span").prop("contenteditable", true).focus();
    
   return false;
  });


// Clear the text
 $("#todo-input").val("");


   ///// Check all boxes 
 $("#toggle-all").click(function () {
 $('input:checkbox').not(this).prop('checked', this.checked);
 });


   //strike-through text when box checked, unstrike when unchecked. 

var underline =  $('.underline');
  $(document).on("click", '.toggle', function() {
    if ($(this).closest("li").find("span").css('textDecoration') === 'line-through') {
          $(this).closest("li").find ($underline).toggle({direction:"right"})
    } else {
      $(this).closest("li").find("span").toggleClass('stroked');

    }
  }); 


  /// Delete all checked boxes 
  $(document).on("click", '#clearCompleted', function() {
  $(".toggle:checked").each(function () {
  $(this).closest("li").remove();
  });
});  


  // for the delete button
  $(document).on("click", 'a[href="#delete"]', function () {
    // remove the list item
  $(this).closest("li").fadeOut(function () {
  $(this).remove();
    });
    return false;
  });
