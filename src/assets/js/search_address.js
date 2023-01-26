 // This example adds a search box to a map, using the Google Place Autocomplete
 // feature. People can enter geographical searches. The search box will return a
 // pick list containing a mix of places and predicted search terms.
 // This example requires the Places library. Include the libraries=places
 // parameter when you first load the API. For example:
 // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places">
 function addressMapAutocomplete(lat = false, lng = false) {

     const map = new google.maps.Map(document.getElementById("address_map"), {
         zoom: 3,
         gestureHandling: "greedy",
         center: { lat: 60.653226, lng: -110.3831843 },
         componentRestrictions: { country: "us" },
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
         },
         styles: [{ "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "on" }] }]
     });

     if (lat && lng) {
         var marker = new google.maps.Marker({
             position: { lat: lat, lng: lng },
             map,
             title: "Hello World!",
         });

         map.setZoom(16);
         map.setCenter(marker.getPosition());


     }
 }

 export { addressMapAutocomplete };