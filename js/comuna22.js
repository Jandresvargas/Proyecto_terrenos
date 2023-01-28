// STYLE 
function style_comuna22(feature){
	return{
		fillColor: '#A3D9E7',
		fillOpacity: 0.5,
		color: '#80FF00',
		opacity: 1,
		weight: 0.5
	};
}
// Carga de papa Geojson BDG
var comuna22 = L.geoJSON();
$.post("php/upload_comuna22.php",
		{
			peticion: 'upload_comuna22'
		},function (data, status, feature)
		{
		if(status=='success'){
			comuna22 = eval('('+data+')')
			var comuna22 = L.geoJSON(comuna22, {
				style: style_comuna22,
				onEachFeature: popup,
			}).addTo(map);
		}
	});
