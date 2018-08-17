// Helper for getting the `index.html?ID=` part form the URL
var getParameterByName = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var airtable_list_url = 'https://api.airtable.com/v0/appM9DH9mXour47dP/Photographers?api_key=key92U04PjpzSuRxg';

// Airtable API Key, unique per user
var api_key = 'key92U04PjpzSuRxg';

// Template that generates HTML for one item in our detail view, given the parameters passed in
var listView = function(id, Name, Location, Image) {
  return `<div class="col-sm-8">
    <div class="card mb-4 box-shadow">
    <h2><a href="photographers.html?id=${id}">${Name}</a></h4>
      <img class="card-img-top" src="${Image}">
      <div class="card-body">
        <h2>${Name}</h2>
        <h3>${Location}</h3>

        
        <div class="d-flex justify-content-between align-items-center">
          
        </div>
        
        <hr />
        
      </div>
    </div>
  </div>`;
}

//Get and display data of all items
var getDataForList = function() {


  // This is where we get the JSON data from Airtable!
  
    $.getJSON( airtable_list_url, function( data ){
        var items = [];
        
      $.each( data.records, function( Photographers, val ) {
        // console.log(val.fields)
        var id = val.id;
        var fields = val.fields;
        var name = val.fields['Name']; 
        var image = val.fields['Image'] ? val.fields['Image'][0].url : '';
        var html = cardTemplate(id, Name, Location, Image);
        items.push(html);
      });
      $(".list-view").append(items.join(''));
    });
  
  }


var cardTemplate = function(id, Name, Location, Image) {
  return `
  <div class="card col-sm-4">
    <p>   </p>
    <img src="${Image}" class="card-img-top"alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${Name}</h5>
      
      <a href="?id=${id}" class="btn btn-warning"> Connect! </a>
    </div>
  </div>`;

}

// Template that generates HTML for one item in our detail view, given the parameters passed in
// var detailView = function(id, spot, picture, description) {
//   return `<div class="col-sm-12">
//     <div class="card mb-4 box-shadow">
//       <img class="card-img-top" src="${picture}">
//       <div class="card-body">
//         <h2>${spot}</h2>
        
//         <p class="card-text">${description}</p>
//         <div class="d-flex justify-content-between align-items-center">
         
//         </div>
//         <hr />
//         <p> Below, find out how to get there! </p>
//         <center> 
//         <a href="https://www.google.com/maps/search/${spot}">
//         <img alt="Map of Location" src="http://icons-for-free.com/free-icons/png/512/285662.png" />
//       </a> 
//          </center>
//       </div>
//     </div>
//   </div>`;
// }



// Get and display the data for one item based on on the ID
// var getDataForId = function(id) {
//   $.getJSON( `https://api.airtable.com/v0/appM9DH9mXour47dP/Table/${id}?api_key=key92U04PjpzSuRxg`, function( record ) {
//     // console.log(data);
//     var html = [];
//     html.push(`<div class="row">`);
//       // console.log(val)
//       var id = record.id;
//       var fields = record.fields;
//       var spot = fields["Spot"];
//        var picture = fields["Picture"] ? fields["Picture"][0].url : '';
//       var description = fields["Description"];
      
//       var itemHTML = detailView(id, spot, picture, description );
//       html.push(itemHTML);
//     html.push(`</div>`);
//     $(".detail-view").append(html.join(""));
//   });

// }


// Do we have an ID in the URL?
var id = getParameterByName("id");
 // If we have an ID, we should only get the data for one item
// Otherwise, we should display the data for all items
if (id) {
  getDataForId(id);
} else {
  getDataForList(); }
