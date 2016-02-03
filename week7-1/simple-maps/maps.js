
    function initialize() {
      var mapCanvas1 = document.getElementById('map1');
      var mapOptions1 = {
        center: new google.maps.LatLng(48.856614, 2.352222),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var mapCanvas2 = document.getElementById('map2');
      var mapOptions2 = {
        center: new google.maps.LatLng(48.856614, 2.352222),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      }
      var map1 = new google.maps.Map(mapCanvas1, mapOptions1);
      var map2 = new google.maps.Map(mapCanvas2, mapOptions2);

    };
    google.maps.event.addDomListener(window, 'load', initialize);
