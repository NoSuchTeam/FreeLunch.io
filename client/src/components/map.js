var Leaflet = require('leaflet');

/*    map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/


var Map = React.createClass({

  getInitialState : function (id) {

  },

  render : function () {
    return (
      <div id={id} class=".map"/>
    );
  }

});

module.exports = Map;

