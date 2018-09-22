// Hide p's & a's
jQuery('p,a').click(function (e) {
    jQuery('.collapse').collapse('hide');
});

// Show/hide style switcher
$(document).ready(function () {
    $('#lightStyle').hide()
    $("#darkStyle").click(function () {
      $('#lightStyle').show();
      $('#darkStyle').hide();
    });
    $("#lightStyle").click(function () {
      $('#lightStyle').hide();
      $('#darkStyle').show();
    });
  });