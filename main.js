
var
// This urls is from airtable from the authentication section
var airtable_list_url = 'https://api.airtable.com/v0/appM9DH9mXour47dP/Table%201?api_key=key92U04PjpzSuRxg';

var airtable_detail_url = 'https://api.airtable.com/v0/appM9DH9mXour47dP/Table%201?api_key=key92U04PjpzSuRxg';

var cardTemplate = function(spot, description,picture) {
    return `
    <div class="card col-sm-8">
      <img src="${picture}" class="card-img-top"alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${spot}</h5>
        <p class="card-text">${description}</p>
        <a href="#" class="btn btn-primary">See More Photos Examples</a>
      </div>
    </div>`;

  }
// This is where we get the JSON data from Airtable!

$.getJSON( airtable_list_url, function( data ){
    var items = [];
  $.each( data.records, function( key, val ) {
    // console.log(val.fields)
    var id = val.id
    var spot = val.fields['Spot'];
    var description = val.fields['Description'];
    var picture = val.fields['Picture'] ? val.fields['Picture'][0].url : null;
    var html = cardTemplate(spot, description, picture);
    items.push(html);
  });
  $(".list-view").append(items.join(''));
});

// if there is an ID, should ony get data for the one item
var id = getParameterByName('id')
if (id) {
  getDataForId(id);
}
else{

}