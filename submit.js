$("#submit-location").on('submit', function(spot, picture, description){
  e.preventDefault();
  var data = {};
  data.fields = {
    'Spot': $(this).find('#Spot').val(),
    'Picture': $(this).find('#Picture').val(),
    'Description': $(this).find('#Description').val(),
    
  };
  $.post(`https://api.airtable.com/v0/appM9DH9mXour47dP/Table?api_key=key92U04PjpzSuRxg`,
    data, function (spot, picture, description) {
      // On Success
      $("#submit-location").html(`<h2>Thanks for submitting!</h2>`);
    }
  );
});