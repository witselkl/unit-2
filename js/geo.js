var mymap = L.map('map').setView([39.75621, -104.99404], 13);

//Example 1.1 line 5...add tile layer. Used to load and display tile layers on the map. Most require attribution, which is set under Layer.
var tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

tileLayer.addTo(mymap);

var marker = L.marker([39.75621, -104.99404]).addTo(mymap);

// a class.. A class for drawing circle overlays on a map
// var circle = L.circle([39.75621, -104.99404], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-105.007, 39.753929]
    }
};

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

//A class for drawing polygon overlays on a map. 
// var polygon = L.polygon([
//     [39.75629, -104.08],
//     [39.75625, -104.06],
//     [39.75621, -104.047]
// ]).addTo(mymap);


geojsonFeature.bindPopup("feature");
geojsonMarkerOptions.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circleMarker.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");


//Used to open popups in certain places of the map
var popup = L.popup()
    .setLatLng([39.75621, -104.99404])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

//event listeners when clicking on the map
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);