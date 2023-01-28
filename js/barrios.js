// STYLE 
function style_barrios(feature){
	return{
		fillColor: '#A3D9E7',
		fillOpacity: 0.5,
		color: '#80FF00',
		opacity: 1,
		weight: 0.5
	};
}
// Carga de papa Geojson BDG
var barrios = L.geoJSON();
$.post("php/upload_barrios.php",
		{
			peticion: 'upload_barrios'
		},function (data, status, feature)
		{
		if(status=='success'){
			barrios = eval('('+data+')')
			var barrios = L.geoJSON(barrios, {
				style: style_barrios,
				onEachFeature: popup,
			}).addTo(map);
		}
	});
