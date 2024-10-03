var mymap = L.map('map').setView([39.75621, -104.99404], 13);

//Example 1.1 line 5...add tile layer. Used to load and display tile layers on the map. Most require attribution, which is set under Layer.
var tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

tileLayer.addTo(mymap);