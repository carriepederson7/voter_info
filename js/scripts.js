$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#legal-age').show();
  }
  else if (age < 18) {
  $('#under-age').show();
}
});
