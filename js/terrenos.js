// STYLE 
function style_terrenos(feature){
	return{
		fillColor: '#E0F2F7',
		fillOpacity: 0.5,
		color: '#0000FF',
		opacity: 1,
		weight: 0.5
	};
}
// Carga de papa Geojson BDG
var terrenos = L.geoJSON();
$.post("php/upload_terrenos.php",
		{
			peticion: 'upload_terrenos'
		},function (data, status, feature)
		{
		if(status=='success'){
			terrenos = eval('('+data+')')
			var terrenos = L.geoJSON(terrenos, {
				style: style_terrenos,
				onEachFeature: popup,
			}).addTo(map);
		}
	});
