//agregar mini mapa
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

var minimap = new L.Control.MiniMap(carto_light,
	{
		toggleDisplay: true,
		minimized: true,
		position: "bottomleft"
	}).addTo(map);
	
	//agrega escala
	new L.control.scale().addTo(map);