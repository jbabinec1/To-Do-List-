$(function () {
  function addItem () {
    // append to the list
    $(".tasks").append('<li><input type= "checkbox" class="toggle" /><span>' + $("#todo-input").val() + '</span> <small><a href="#edit">Edit</a> &bull; <a href="#delete">Delete</a></small></li>');
    
    // clear the text
    $("#todo-input").val("");
  }
   
   ///// Check all boxes 
  
  $("#toggle-all").click(function () {
     $('input:checkbox').not(this).prop('checked', this.checked);
 });
  
 
  /// Delete all checked boxes 
  
  $(document).on("click", '#clearCompleted', function() {
  $(".toggle:checked").each(function () {
    $(this).closest("li").remove();
  });
});  
  
  
   
   //strike-through text when box checked, unstrike when unchecked. 
  
  
  $(document).on("click", '.toggle', function() {
    if ($(this).closest("li").find("span").css('textDecoration') === 'line-through') {
          $(this).closest("li").find("span").css('textDecoration', 'none');
    } else {
      $(this).closest("li").find("span").toggleClass('stroked');
      
    }
  }); 
  
   
   // Submit with when enter key is pressed, and clicking add button
   
  $("#todo").keydown(function (e) {
   
    if (e.which == 14)
      addItem();
  });
        
  $('#todo-form').on('submit',function(e) {
    e.preventDefault();
    addItem();
  })
  
  // delegate the events to dynamically generated elements
  // for the edit button
  $(document).on("click", 'a[href="#edit"]', function () {
    
    // make the span editable and focus it
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
  });
  
  // for the delete button
  $(document).on("click", 'a[href="#delete"]', function () {
    // remove the list item
    $(this).closest("li").fadeOut(function () {
      $(this).remove();
    });
    return false;
  });
 });