// STYLE 
function style_comuna22(feature){
	return{
		fillColor: '',
		fillOpacity: 0.2,
		color: '',
		opacity: 1,
		weight: 0.5
	};
}
// Carga Geojson BDG
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
			}).addTo(map);
		}
	});
