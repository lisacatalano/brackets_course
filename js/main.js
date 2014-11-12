(function ($) {
  'use strict';
  // Hide all shortcuts and notes
  var hideAll = function() {
    $('.shortcuts').hide();
    $('.notes').hide();
  };
 
  // animate the platform buttons when user chooses one before taking them page. 
  $('.platform').on('click', function(e) {
    var url = this.href;
    var $target = $(this).parent();
    e.preventDefault();
    
    $target.addClass('active').siblings().hide();
    $target.animate({
      width: '90%',
      height: '500px',
      opacity: 0
    }, 1000, function() {
      window.location = url;
    });
  });
 
  // toggle display of shortcuts when clicking on header
  $('h2').on('click keypress', function() {
    $(this).parent().find('.shortcuts, .notes').slideToggle();
  });
  
  $('h1').on('click', hideAll);
  
  hideAll();
  
}(jQuery));
