$("#submit-location").on('submit', function(e){
  e.preventDefault();
  var data = {};
  data.fields = {
    'Spot': $(this).find('#Spot').val(),
    'Picture': $(this).find('#Picture').val(),
    'Description': $(this).find('#Description').val(),
    
  };
  $.post(`https://api.airtable.com/v0/appSrgke7E0ElZhMY/Table?api_key=${api_key}`,
    data, function () {
      // On Success
      $("#submit-location").html(`<h2>Thanks for submitting!</h2>`);
    }
  );
});