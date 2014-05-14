$(document).ready(function() {
        var map;
        function initialize() {
            var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(33.613462, -111.954624),
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        };

    google.maps.event.addDomListener(window, 'load', initialize);
    
    $('#getGPS').click( function(event){

        street = $('#streetAddress').val()+'+';
        city = $('#city').val()+'+';
        state = $('#state').val();

        // the parameters we need to pass in our request to Google Geocode's API
        googleURL1 = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        googleURL2 = '&sensor=true&key=AIzaSyBJh8OQe2-Ni97hUnshrLde2CnkYG4TQTQ';
        
        var request =
            googleURL1+
            street+
            city+
            state+
            googleURL2;

        var google_response = $.ajax({
            url: request,
            type: "GET"})
            .done(function (data) {
                var lat = data.results[0].geometry.location.lat;
                var long = data.results[0].geometry.location.lng;
                console.log(lat);
                console.log(long); 
                $('#backFromGoogle').html(data.results[0].geometry.location.lat+", "+data.results[0].geometry.location.lng);

            /*    var location = new GLatLng(lat,long);
                var marker = new GMarker(location);
                map.addOverlay(marker); */
                
                $('#latitude').html(" "+data.results[0].geometry.location.lat);
                $('#longitude').html(" "+data.results[0].geometry.location.lng);


            });
    });
    
    $('#clearForm').click( function(event){
        $("#streetAddress").val("");
        $("#city").val("");
        $("#state").val("");
        $('#latitude').html("");
        $('#longitude').html("");
        
    });
    

    $('form').submit(function(e){e.preventDefault();});
            
    
 });
    
