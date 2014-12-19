(function ($) {
  'use strict';
  // Hide all shortcuts and notes
  var $details = $('.shortcuts, .notes');
  var hideAll = function() {
    $details.hide();
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

  $('.collapse').on('click', function(e) {
    e.preventDefault();
    hideAll();
  });
  $('.expand').on('click', function(e) {
    e.preventDefault();
    $details.show();
  });

  hideAll();

}(jQuery));
