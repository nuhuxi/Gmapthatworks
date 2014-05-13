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
    
});
    
