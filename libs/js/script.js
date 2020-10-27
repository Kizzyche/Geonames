$('#btn1').click(()=>{
    $.ajax({
        url:"libs/php/geotimezone.php",
        type:'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val(),
            
        },
        success: function (result) {
           
            
            if(result.status.name == "ok"){
                $('#res').empty();
                $('#res').css('display', 'block');
                $('#res').append('<p> Country Name: ' + result['countryName']+'</p>');
                $('#res').append('<p> Timezone: ' + result['timezoneId']+'</p>');
                $('#res').append('<p> Current Date and Time: ' + result['datetime']+'</p>');
                $('#res').append('<p> Sunrise: ' + result['sunrise']+'</p>');
                $('#res').append('<p> Sunset: ' + result['sunset']+'</p>');

            }
        }


    })
});

$('#btn2').click(()=>{
 
    
    $.ajax({
        url:"libs/php/geoaddress.php",
        type:'POST',
        dataType: 'json',
        data: {
            lat: $('#lat1').val(),
            lng: $('#lng1').val(),
        },
        success: function (result) {
            
            
            if(result.status.name == "ok"){
                $('#res').empty();
                $('#res').css('display', 'block');
                $('#res').append('<p> Nearest Address: ' + result['address']['houseNumber']+ ' ' + result['address']['street'] +' street.</p>');
                $('#res').append('<p> Locality: ' + result['address']['locality']+'</p>');
                $('#res').append('<p> Postal Code: ' + result['address']['postalcode']+'</p>');
                
            }
        }


    })
});

$('#btn3').click(()=>{
    $.ajax({
        url: "libs/php/geoplaces.php",
        type:'POST',
        dataType: 'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            east: $('#east').val(),
            west: $('#west').val()
            
        },
        success: function(result){

            if(result.status.name == "ok"){
                $('#res').empty();
                result['geonames'].forEach(geoname => {
                    $('#res').append('<div id="container"></div>');
                    $('#container').append('<h4> Name of Place: ' + geoname['name']+'</h4>')
                    $('#container').append('<p> Population: ' + geoname['population']+'</p>')
                    $('#container').append('<p> More info : <a href="http://'+geoname['wikipedia']+'" target="_blank">' +geoname['wikipedia']+ '</a></p><hr/>')

                });
            }
        }
    })
})
