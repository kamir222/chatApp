$('form').on('submit',function ()  { // target all form elements. Funtion 'on' envoked for the event 'submit'. Custom funtion follows.
  var text = $('#message').val(); //captures the text value in HTML element with id 'message'
  alert(text); //alert the text captured 
  return false; //to cancel original form submission logic to the server
});
