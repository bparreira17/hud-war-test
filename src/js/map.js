function initMap() {
 var styledMapType = new google.maps.StyledMapType(
  [{
   elementType: 'geometry',
   stylers: [{
    color: '#ebe3cd'
   }]
  }, {
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#523735'
   }]
  }, {
   elementType: 'labels.text.stroke',
   stylers: [{
    color: '#f5f1e6'
   }]
  }, {
   featureType: 'administrative',
   elementType: 'geometry.stroke',
   stylers: [{
    color: '#c9b2a6'
   }]
  }, {
   featureType: 'administrative.land_parcel',
   elementType: 'geometry.stroke',
   stylers: [{
    color: '#dcd2be'
   }]
  }, {
   featureType: 'administrative.land_parcel',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#ae9e90'
   }]
  }, {
   featureType: 'landscape.natural',
   elementType: 'geometry',
   stylers: [{
    color: '#dfd2ae'
   }]
  }, {
   featureType: 'poi',
   elementType: 'geometry',
   stylers: [{
    color: '#dfd2ae'
   }]
  }, {
   featureType: 'poi',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#93817c'
   }]
  }, {
   featureType: 'poi.park',
   elementType: 'geometry.fill',
   stylers: [{
    color: '#a5b076'
   }]
  }, {
   featureType: 'poi.park',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#447530'
   }]
  }, {
   featureType: 'road',
   elementType: 'geometry',
   stylers: [{
    color: '#f5f1e6'
   }]
  }, {
   featureType: 'road.arterial',
   elementType: 'geometry',
   stylers: [{
    color: '#fdfcf8'
   }]
  }, {
   featureType: 'road.highway',
   elementType: 'geometry',
   stylers: [{
    color: '#f8c967'
   }]
  }, {
   featureType: 'road.highway',
   elementType: 'geometry.stroke',
   stylers: [{
    color: '#e9bc62'
   }]
  }, {
   featureType: 'road.highway.controlled_access',
   elementType: 'geometry',
   stylers: [{
    color: '#e98d58'
   }]
  }, {
   featureType: 'road.highway.controlled_access',
   elementType: 'geometry.stroke',
   stylers: [{
    color: '#db8555'
   }]
  }, {
   featureType: 'road.local',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#806b63'
   }]
  }, {
   featureType: 'transit.line',
   elementType: 'geometry',
   stylers: [{
    color: '#dfd2ae'
   }]
  }, {
   featureType: 'transit.line',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#8f7d77'
   }]
  }, {
   featureType: 'transit.line',
   elementType: 'labels.text.stroke',
   stylers: [{
    color: '#ebe3cd'
   }]
  }, {
   featureType: 'transit.station',
   elementType: 'geometry',
   stylers: [{
    color: '#dfd2ae'
   }]
  }, {
   featureType: 'water',
   elementType: 'geometry.fill',
   stylers: [{
    color: '#b9d3c2'
   }]
  }, {
   featureType: 'water',
   elementType: 'labels.text.fill',
   stylers: [{
    color: '#92998d'
   }]
  }], {
   name: 'Styled Map'
  });

 var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: {
   lat: -33.9,
   lng: 151.2,
   mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
     'styled_map'
    ]
   }
  }
 });

 map.mapTypes.set('styled_map', styledMapType);
 map.setMapTypeId('styled_map');
 setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var safezones = [
 ['Safe Zone', -33.890542, 151.274856, 4],
 ['Safe Zone', -33.923036, 151.259052, 5],
 ['Safe Zone', -34.028249, 151.157507, 3],
 ['Safe Zone', -33.80010128657071, 151.28747820854187, 2],
 ['Safe Zone', -33.950198, 151.259302, 1]
];


var dangerzones = [
 ['Danger Zone', -30.890542, 151.274856, 4],
 ['Danger Zone', -30.923036, 151.259052, 5],
 ['Danger Zone', -30.028249, 151.157507, 3],
 ['Danger Zone', -30.80010128657071, 151.28747820854187, 2],
 ['Danger Zone', -30.950198, 151.259302, 1]
];

function setMarkers(map) {
 // Adds markers to the map.

 var imagesf = new google.maps.MarkerImage(
  "./src/img/safezone.png",
  null, /* size is determined at runtime */
  null, /* origin is 0,0 */
  null, /* anchor is bottom center of the scaled image */
  new google.maps.Size(54, 54)
 );


 var imagedg = new google.maps.MarkerImage(
  "./src/img/dangerzone.png",
  null, /* size is determined at runtime */
  null, /* origin is 0,0 */
  null, /* anchor is bottom center of the scaled image */
  new google.maps.Size(27, 27)
 );


 for (var i = 0; i < safezones.length; i++) {
  var sf = safezones[i];
  var marker = new google.maps.Marker({
   position: {
    lat: sf[1],
    lng: sf[2]
   },
   map: map,
   icon: imagesf,
   shape: null,
   title: sf[0],
   zIndex: sf[3]
  });
 }

 for (var i = 0; i < dangerzones.length; i++) {
  var dg = dangerzones[i];
  var marker2 = new google.maps.Marker({
   position: {
    lat: dg[1],
    lng: dg[2]
   },
   map: map,
   icon: imagedg,
   shape: null,
   title: dg[0],
   zIndex: dg[3]
  });
 }

}
