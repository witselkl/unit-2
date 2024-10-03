var mymap = L.map('map').setView([39.75621, -104.99404], 13);

//Example 1.1 line 5...add tile layer. Used to load and display tile layers on the map. Most require attribution, which is set under Layer.
var tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

tileLayer.addTo(mymap);

var marker = L.marker([39.75621, -104.99404]).addTo(mymap);

// a class.. A class for drawing circle overlays on a map
var circle = L.circle([39.75621, -104.99404], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//A class for drawing polygon overlays on a map. 
var polygon = L.polygon([
    [39.7509, -140.08],
    [39.7503, -140.06],
    [39.7508, -140.047]
]).addTo(mymap);

marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");


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