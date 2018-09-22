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