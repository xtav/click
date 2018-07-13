// This urls is from airtable from the authentication section
var airtable_list_url = 'https://api.airtable.com/v0/appM9DH9mXour47dP/Table%201?api_key=key92U04PjpzSuRxg'

// This is where we get the JSON data from Airtable!

$.getJSON( airtable_list_url, function( data ){
    console.log(data)
    var items = [];
    $.each( data, function( key, val ) { 
        console.log( val.fields)
        items.push('<h2>${val.fields['Name']}</h2>' );

    });
    $(".list-view").append(items.join(''));
});
